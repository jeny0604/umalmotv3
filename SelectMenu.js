//https://www.youtube.com/watch?v=dEqsPnehMkc
//https://kylewbanks.com/blog/fullscreen-background-image-in-react-native

import React from 'react';
import {
  View, 
  StyleSheet, 
  ImageBackground
} from 'react-native';

import MenuItem from './MenuItem';
import MenuItem90 from './MenuItem90';
import MenuItem10 from './MenuItem10';

class SelectMenu extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./img/secondbg.png')}
        style={styles.container}>
        <View style={styles.menuContainer}>
          <MenuItem10 itemImage={require('./img/10button.png')} />
          <MenuItem itemImage={require('./img/00button.png')} />
          <MenuItem90 itemImage={require('./img/90button.png')} />
        </View>
      </ImageBackground>
    );
  }
}



export default SelectMenu;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width: '100%',
    height: '100%',
  },
  menuContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent :'space-around',
    marginTop: 120,
    marginBottom: 20,
  },

});


