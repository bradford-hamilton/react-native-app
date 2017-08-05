import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { title: 'Welcome', };

  render() {
    let picture = { uri: 'http://bradford.cafnr.org/assets/sites/3/Bobwhite_Quail_0500.jpg', };
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>My name is Bradford,</Text>
        <Text style={styles.text}>you are using my app.</Text>
        <Text style={styles.text}>Welcome to the Quail Zone.</Text>
        <Image source={picture} style={styles.image} />
        <Button
          onPress={() => navigate('QuailZone')}
          title="Enter only if you are 18+"
          color="#5589ba"
          accessibilityLabel="Learn more about this button"
        />
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
    marginTop: 15,
    fontSize: 18,
  },
  image: {
    width: 225,
    height: 225,
    marginTop: 20,
    marginBottom: 20,
  },
});
