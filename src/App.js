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
import CreateScreen from './create/CreateScreen';
import ChatTabNavigator from './chat/ChatTabNavigator';
import SettingsScreen from './settings/SettingsScreen';
import { Routes } from './types';

const tabs: Routes = {
  HomeTab: {
    path: 'home',
    screen: HomeScreen
  },
  ChatTab: {
    path: 'chat',
    screen: ChatTabNavigator
  },
  SettingsTab: {
    path: 'settings',
    screen: SettingsScreen
  },
};

const Tabs = TabNavigator(tabs,  {
  tabBarOptions: {
    activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
  }
});

const routes = {
  Tabs: {
    path: 'tabs',
    screen: Tabs
  },
  CreateModal: {
    screen: CreateScreen
  }
};

const Main = StackNavigator(routes, {
  mode: 'modal',
  headerMode: 'none'
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Main />
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
