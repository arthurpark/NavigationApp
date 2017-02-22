/**
 * SettingsScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';

const SettingsScreen = ({ navigation }) => (
  <Screen
    headerText="Settings"
    headerBackgroundColor="coral"
    backgroundColor="darkorange"
  >
    <Text>Settings Screen</Text>
    <Button
      onPress={() => navigation.goBack()}
      title="Back"
    />
  </Screen>
);

SettingsScreen.navigationOptions = {
  tabBar: {
    label: 'Settings',
  }
};

export default SettingsScreen;
