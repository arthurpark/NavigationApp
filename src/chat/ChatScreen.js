/**
 * ChatScreen
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, Button, ListView, StyleSheet, TouchableHighlight } from 'react-native';

const RoomRow = (props) => (
  <TouchableHighlight onPress={props.onPress}>
    <View style={styles.roomRow}>
      <View style={styles.avatar}>
        <Text style={styles.initial}>{props.name.split(' ').map(word => word[0].toUpperCase()).slice(0, 2)}</Text>
      </View>
      <View style={styles.roomContent}>
        <Text>{props.lastMessage}</Text>
      </View>
    </View>
  </TouchableHighlight>
);

class RoomList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.rooms),
    };
  }

  render() {
    const { dataSource } = this.state;
    const { onRowPress } = this.props;

    return (
      <ListView
        style={styles.roomList}
        dataSource={dataSource}
        renderRow={(rowData) => (
          <RoomRow
            name={rowData.name}
            lastMessage={rowData.lastMessage}
            onPress={() => onRowPress(rowData)}
          />
        )}
        enableEmptySections
      />
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState(state => ({
      dataSource: state.dataSource.cloneWithRows(nextProps.rooms)
    }));
  }
}


class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat'
  };

  state = {
    rooms: [
      {
        name: 'Arthur Park',
        lastMessage: 'I have created an example react-navigation repo. Come check out.'
      },
      {
        name: 'Hansam Park',
        lastMessage: 'Yo, what are you up to?'
      },
      {
        name: 'Alex Lee',
        lastMessage: 'What do you want for dinner tonight?'
      }
    ]
  }

  render() {
    const { navigation } = this.props;
    const { rooms } = this.state;

    return (
      <RoomList rooms={rooms} onRowPress={this.handleRowPress} />
    );
  }

  handleRowPress = (rowData) => {
    this.props.navigation.navigate('Room', rowData);
  };
}

const styles = StyleSheet.create({
  roomList: {
    flex: 1,
    backgroundColor: 'green'
  },
  roomRow: {
    flex: 1,
    height: 70,
    padding: 10,
    flexDirection: 'row',
  },
  avatar: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    padding: 10,
    justifyContent: 'center',
  },
  initial: {
    textAlign: 'center'
  },
  roomContent: {
    flex: 1,
    backgroundColor: 'limegreen',
    marginLeft: 10,
    padding: 10
  }
});

export default ChatScreen;
