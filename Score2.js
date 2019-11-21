import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  View,
  Text,
  CheckBox, //checkbox only applied in android
} from 'react-native';
import YearItem from './YearItem';
import Restart90 from './Restart90';


class ScoreScreen extends React.Component {
   render() {
    return (
        <ImageBackground
          source={require('./img/thirdbg.png')}
          style={styles.container}>
          <View style={styles.score}>
            <Text style={styles.scBText}>3</Text>
            <Text style={styles.scText}>/5</Text>
          </View>
          <View style={styles.scoreText}>
            <Text style={styles.desText}>3문제를 맞췄어요!</Text>
            <Text style={styles.desText}>조금 더 분발해야겠네요!</Text>
          </View>
          <View style={styles.buttons}>
              <Restart90 itemImage={require('./img/replay.png')} />
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


