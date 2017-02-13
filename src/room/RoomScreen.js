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
    headerBackgroundColor="lightgreen"
    backgroundColor="green"
  >
    <Text>Room Screen</Text>
    <Button
      onPress={() => navigation.navigate('Home')}
      title="Back"
    />
  </Screen>
);

RoomScreen.navigationOptions = {
  tabBar: {
    label: 'Room',
    // icon: ({ tiniColor, focused }) => (
    //
    // )
  }
};

export default RoomScreen;
