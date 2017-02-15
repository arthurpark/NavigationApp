/**
 * RoomScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';

const RoomScreen = ({ navigation }) => (
  <Screen
    headerText="Room"
    headerBackgroundColor="violet"
    backgroundColor="purple"
  >
    <Text>Room Screen</Text>
    <Button
      onPress={() => navigation.goBack()}
      title="Back"
    />
  </Screen>
);

RoomScreen.navigationOptions = {
  title: ({ state }) => `Chat with ${state.params.name}`
};

export default RoomScreen;
