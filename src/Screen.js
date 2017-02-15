/**
 * Screen
 * @flow
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

class Screen extends Component {
  render() {
    const { headerText, headerBackgroundColor, backgroundColor, children } = this.props;

    return (
      <View style={[styles.container, { backgroundColor: backgroundColor }]}>
        <View style={[styles.header, { backgroundColor: headerBackgroundColor }]}>
          <Text style={{ textAlign: 'center', }}>
            {headerText}
          </Text>
        </View>

        <View style={styles.content}>
          {children}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    height: 60,
    paddingTop: 30,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Screen;
