/**
 * HomeScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';

const HomeScreen = ({ navigation }) => (
  <Screen
    headerText="Home"
    headerBackgroundColor="powderblue"
    backgroundColor="steelblue"
  >
    <Text>Home Screen</Text>

    <Button
      onPress={() => navigation.navigate('Create')}
      title={'Create'}
    />
  </Screen>
);

HomeScreen.navigationOptions = {
  tabBar: {
    label: 'Home',
    // icon: ({ tiniColor, focused }) => (
    //
    // )
  }
};

export default HomeScreen;
