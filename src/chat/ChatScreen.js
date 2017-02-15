/**
 * ChatScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import RoomScreen from '../room/RoomScreen';
import Screen from '../Screen';

const ChatScreen = ({ navigation }) => (
  <Screen
    headerText="Chat"
    headerBackgroundColor="lightgreen"
    backgroundColor="green"
  >
    <Text>Chat Screen (Show list here)</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Home"
    />
    <Button
      onPress={() => navigation.goBack()}
      title="Back"
    />
    <Button
      onPress={() => navigation.navigate('Room', { name: 'Arthur' })}
      title="Room"
    />
  </Screen>
);

const routes = {
  Chat: {
    path: 'chat',
    screen: ChatScreen
  },
  Room: {
    path: 'chat/:name',
    screen: RoomScreen
  }
}

const Navigator = StackNavigator(routes, {
  mode: 'modal'
});

Navigator.navigationOptions = {
  tabBar: {
    label: 'Chat',
    // icon: ({ tiniColor, focused }) => (
    //
    // )
  }
};

export default Navigator;
