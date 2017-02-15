/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import HomeScreen from './home/HomeScreen';
import ChatScreen from './chat/ChatScreen';
import SettingsScreen from './settings/SettingsScreen';
import { Routes } from './types';

const tabs: Routes = {
  Home: {
    path: 'home',
    screen: HomeScreen
  },
  Chat: {
    path: 'chat',
    screen: ChatScreen
  },
  Settings: {
    path: 'settings',
    screen: SettingsScreen
  },
};

const Navigator = TabNavigator(tabs,  {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
