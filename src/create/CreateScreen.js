/**
 * CreateScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Screen from '../Screen';

const handlePress = (navigation) => {
  navigation.goBack();

  setTimeout(() => {
    navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'ChatTab',
        action: NavigationActions.navigate({
          routeName: 'Room',
          params: { name: 'Arthur Park '}
        })
      })
    );
  });
};

const CreateScreen = ({ navigation, onClose }) => (
  <Screen
    headerText="Create"
    headerBackgroundColor="lightgreen"
    backgroundColor="green"
  >
    <Text>Create</Text>

    <Button
      onPress={() => handlePress(navigation)}
      title="Create"
    />

    <Button
      onPress={() => navigation.goBack()}
      title="Close"
    />
  </Screen>
);

export default CreateScreen;
