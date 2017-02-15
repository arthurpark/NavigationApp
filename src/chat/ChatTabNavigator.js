/**
 * Navigator for Chat tab
 */
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';
import RoomScreen from './RoomScreen';

const routes = {
  Chat: {
    path: 'chat',
    screen: ChatScreen,
  },
  Room: {
    path: 'chat/:name',
    screen: RoomScreen
  }
}

const ChatTabNavigator = StackNavigator(routes, {
  // mode: 'modal'
});

ChatTabNavigator.navigationOptions = {
  tabBar: {
    label: 'Chat',
  },
};

export default ChatTabNavigator;
