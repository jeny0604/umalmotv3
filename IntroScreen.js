import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  View,
} from 'react-native';

import BgItem from './BgItem';

class IntroScreen extends React.Component {
  render() {
    return (
        <ImageBackground
          source={require('./img/firstbg.png')}
          style={styles.container}>
          <View style={styles.smallContainer}>
            <BgItem itemImage={require('./img/firstbg.png')}/>
          </View>
        </ImageBackground>
    );
  }
}

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width: '100%',
    height: '100%',

  },
  smallContainer:{
    flex:1,
    width: '100%',
    height: '100%',
  }

});


