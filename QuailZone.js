import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class QuailZone extends React.Component  {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { title: 'Dark Web QuailZone. Caution.', };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>Welcome to The Quail Zone.</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
