import React from 'react';
import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class QuailZone extends React.Component  {
  constructor(props) {
    super(props);
  }

  static navigationOptions = { title: 'Dark Web QuailZone. Caution.', };

  render() {
    let picture1 = { uri: 'http://bradford.cafnr.org/assets/sites/3/Bobwhite_Quail_0500.jpg', };
    let picture2 = { uri: 'https://www.allaboutbirds.org/guide/PHOTO/LARGE/7695206548_48632bcb86_h_SimonRichards.jpg', };
    let picture3 = { uri: 'https://s-media-cache-ak0.pinimg.com/736x/c2/9d/bd/c29dbde9cabb163a22c8fb54f23a8f92--quails-pheasant.jpg', };

    return (
      <View style={styles.container}>
        <Text style={styles.text}>May all your quail dreams come true!</Text>
        <Image source={picture1} style={styles.image} />
        <Image source={picture2} style={styles.image} />
        <Image source={picture3} style={styles.image} />
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
    width: 170,
    height: 170,
    marginTop: 20,
  },
});
