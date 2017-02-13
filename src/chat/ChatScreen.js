/**
 * ChatScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';

const ChatScreen = ({ navigation }) => (
  <Screen
    headerText="Chat"
    headerBackgroundColor="lightgreen"
    backgroundColor="green"
  >
    <Text>Chat Screen</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Back"
    />
  </Screen>
);

ChatScreen.navigationOptions = {
  tabBar: {
    label: 'Chat',
    // icon: ({ tiniColor, focused }) => (
    //
    // )
  }
};

export default ChatScreen;
