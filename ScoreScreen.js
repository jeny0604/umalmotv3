import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  View,
  Text,
  CheckBox, //checkbox only applied in android
} from 'react-native';
import RestartItem from './RestartItem';
import YearItem from './YearItem';


class ScoreScreen extends React.Component {
   render() {
    return (
        <ImageBackground
          source={require('./img/thirdbg.png')}
          style={styles.container}>
          <View style={styles.score}>
            <Text style={styles.scBText}>8</Text>
            <Text style={styles.scText}>/10</Text>
          </View>
          <View style={styles.scoreText}>
            <Text style={styles.desText}>8문제를 맞췄어요!</Text>
            <Text style={styles.desText}>당신 혹시...  새내기?!</Text>
          </View>
          <View style={styles.buttons}>
              <RestartItem itemImage={require('./img/replay.png')} />
              <YearItem itemImage={require('./img/anotherYear.png')} />
          </View>
          <View style={styles.bottom}/>
        </ImageBackground>
    );
  }
}

export default ScoreScreen;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width: '100%',
    height: '100%',
  },
  score: {
    flex:2,
    marginTop: 160,
    marginLeft: 140,
    alignItems: 'center',
    flexDirection: 'row',
  },
  scoreText: {
    marginTop: 30,
    flex: 2,
    alignItems: 'center',
  },
  buttons:{
    flex:2,
    alignItems: 'center',
    justifyContent :'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  bottom: {
    flex:1,
  },
  scText: {
      fontSize: 40,
  },
  scBText : {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#1f3b5c',
  },
  desText: {
      fontSize: 30,
  }

});


