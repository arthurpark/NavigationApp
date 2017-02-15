/**
 * HomeScreen
 * @flow
 */
import React, { Component } from 'react';
import { Text, Button, Modal } from 'react-native';
import Screen from '../Screen';
import CreateScreen from '../create/CreateScreen';

class HomeScreen extends Component {
  state = {
    isCreateModalOpen: false
  }

  render() {
    const { isCreateModalOpen } = this.state;

    console.log('osCreateModalOpen', isCreateModalOpen)

    return (
      <Screen
        headerText="Home"
        headerBackgroundColor="powderblue"
        backgroundColor="steelblue"
      >
        <Text>Home Screen</Text>

        <Button
          onPress={() => this.openCreateModal()}
          title={'Create'}
        />

        <Modal
          animationType="slide"
          visible={isCreateModalOpen}
        >
          <CreateScreen onClose={this.closeCreateModal}/>
        </Modal>
      </Screen>
    );
  }

  openCreateModal = () => {
    this.setState({
      isCreateModalOpen: true
    });
  };

  closeCreateModal = () => {
    console.log('close');
    this.setState({
      isCreateModalOpen: false
    });
  };
}

HomeScreen.navigationOptions = {
  tabBar: {
    label: 'Home',
    // icon: ({ tiniColor, focused }) => (
    //
    // )
  }
};

export default HomeScreen;
