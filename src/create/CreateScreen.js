/**
 * CreateScreen
 * @flow
 */
import React from 'react';
import { Text, Button } from 'react-native';
import Screen from '../Screen';

const CreateScreen = ({ navigation, onClose }) => (
  <Screen
    headerText="Create"
    headerBackgroundColor="lightgreen"
    backgroundColor="green"
  >
    <Text>Create</Text>
    <Button
      onPress={() => navigation.goBack()}
      title="Close"
    />
  </Screen>
);

export default CreateScreen;
