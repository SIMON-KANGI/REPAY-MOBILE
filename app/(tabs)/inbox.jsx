import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import NotificationCard from '../../components/NotificationCard';
import { styled } from 'nativewind';

const StyledSafeAreaView = styled(SafeAreaView);
const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledScrollView = styled(ScrollView);

const Inbox = () => {
  return (
    <StyledSafeAreaView className="flex-1 bg-[#0d1b2a]">
      <StyledView className="p-3 flex-row items-center">
        <StyledTouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="white" />
        </StyledTouchableOpacity>
        <StyledText className="text-2xl text-center font-bold mx-3 text-stone-300">
          Notifications
        </StyledText>
      </StyledView>
      <StyledScrollView>
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
        <NotificationCard
          message="You have a new friend request from John Doe."
          sender="John Doe"
          date="12-01-2022"
        />
      </StyledScrollView>
    </StyledSafeAreaView>
  );
};

export default Inbox;
