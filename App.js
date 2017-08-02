import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, View, Dimensions } from 'react-native';
import HomeScreen from './HomeScreen';
import QuailZone from './QuailZone';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator style={{ width: Dimensions.get('window').width }} />
      </View>
    )
  }
}

const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  QuailZone: { screen: QuailZone },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  }
})
