import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://repay-app.onrender.com',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  }
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log('Sending refresh token');
    const refreshToken = api.getState().auth.refreshToken;
    const refreshResult = await baseQuery(
      {
        url: '/refresh/token',
        method: 'POST',
        body: { refreshToken },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({
        accessToken: refreshResult.data.accessToken,
        refreshToken: refreshResult.data.refreshToken,
        user
      }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      throw refreshResult.error || result.error;
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
