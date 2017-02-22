/**
 * HomeScreen
 * @flow
 */
import React, { Component } from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';
import CreateScreen from '../create/CreateScreen';

class HomeScreen extends Component {
  render() {
    return (
      <Screen
        headerText="Home"
        headerBackgroundColor="powderblue"
        backgroundColor="steelblue"
      >
        <Text>Home Screen</Text>

        <Button
          onPress={() => this.props.navigation.navigate('CreateModal')}
          title={'Create'}
        />
      </Screen>
    );
  }
}

HomeScreen.navigationOptions = {
  tabBar: {
    label: 'Home',
  }
};

export default HomeScreen;
