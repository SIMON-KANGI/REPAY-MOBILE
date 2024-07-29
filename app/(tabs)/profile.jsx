import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../constants/images';
import LogOut from '../../components/logOut';
import { styled } from 'nativewind';
const StyledView=styled(View)
const SafeArea = styled(SafeAreaView)

const StyledText= styled(Text)
const StyledImage=styled(Image)
const Profile = () => {
  return (
    <SafeArea className="flex-1 bg-white">
      <StyledText className="text-center text-2xl font-bold mt-4">My Profile</StyledText>
      
      <StyledView className="items-center relative mt-4">
        <StyledImage
          source={images.profile}
          className="w-32 h-32 rounded-full"
        />
        <StyledText className="absolute top-24 right-10 text-blue-500">Edit</StyledText>
      </StyledView>

      <StyledView className="p-4 flex-row justify-around border-b border-gray-200">
        <StyledView className="items-center border-r p-4">
          <StyledText className="text-xl font-bold">Full Name</StyledText>
          <StyledText className="text-lg">Simon Mwangi</StyledText>
        </StyledView>
        <StyledView className="items-center p-4">
          <StyledText className="text-xl font-bold">Email Address</StyledText>
          <StyledText className="text-lg">sonkusons@gmail.com</StyledText>
        </StyledView>
      </StyledView>

      <StyledView className="p-4 flex-row justify-around border-b border-gray-200">
        <StyledView className="items-center border-r p-4">
          <StyledText className="text-xl font-bold">Location</StyledText>
          <StyledText className="text-lg">Nairobi</StyledText>
        </StyledView>
        <StyledView className="items-center p-4">
          <StyledText className="text-xl font-bold">Contact</StyledText>
          <StyledText className="text-lg">0797222488</StyledText>
        </StyledView>
      </StyledView>

      <StyledView className="p-4 flex-row justify-around">
        <StyledView className="items-center border-r p-4">
          <StyledText className="text-xl font-bold">Password</StyledText>
          <StyledText className="text-lg">********</StyledText>
        </StyledView>
        <StyledView className="items-center p-4">
          <StyledText className="text-xl font-bold">Account Type</StyledText>
          <StyledText className="text-lg">Personal</StyledText>
        </StyledView>
      </StyledView>

      <LogOut />
    </SafeArea>
  );
};

export default Profile;
