import React from 'react';
import { 
  StyleSheet, 
  ImageBackground,
  View,
  Text,
  CheckBox, //checkbox only applied in android
} from 'react-native';
import PbItem12 from './PbItem12';
import HintItem from './HintItem';
import PlayMusic12 from './PlayMusic12';

class Problem12 extends React.Component {
   render() {
    return (
        <ImageBackground
          source={require('./img/thirdbg.png')}
          style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}> 2번 문제 </Text>
          </View>
          <View style={styles.descrption}>
             <View style={styles.descrptionTop}>
                <Text style={styles.desText}> 다음 노래를 듣고, 제목을 맞춰주세요 </Text>
             </View>
             <View style={styles.descrptionBottom}>
                <PlayMusic12 itemImage={require('./img/play.png')} style={styles.playbuSt}/>
                <ImageBackground
                    source={require('./img/alarm.png')}
                    resizeMode="contain"
                    style={styles.alarmbuSt}>
                </ImageBackground>
                <View style={styles.hintContainer}>
                    <Text style={styles.hintText}> 힌트! 10초 더 들려드려요 </Text>
                    <View style={styles.hint}>
                        <ImageBackground
                            source={require('./img/hint.png')}
                            resizeMode="contain"
                            style={styles.hintImage}>
                        </ImageBackground>
                        <ImageBackground
                            source={require('./img/hint.png')}
                            resizeMode="contain"
                            style={styles.hintImage}>
                        </ImageBackground>
                        <ImageBackground
                            source={require('./img/hint.png')}
                            resizeMode="contain"
                            style={styles.hintImage}>
                        </ImageBackground>
                    </View>
                </View>
             </View>
          </View>
          <View style={styles.element}>
            <View style={styles.proContainer}>
              <PbItem12 itemImage={require('./img/90/manam.png')}/>
              <PbItem12 itemImage={require('./img/90/tears.png')} />
              <PbItem12 itemImage={require('./img/90/know.png')} />
              <PbItem12 itemImage={require('./img/90/nobrain.png')} />
              <PbItem12 itemImage={require('./img/90/nun.png')} />
              <HintItem itemImage={require('./img/hintbt.png')} />
            </View>
          </View>
        </ImageBackground>
    );
  }
}

export default Problem12;

const styles = StyleSheet.create({
  container: {
    flex : 1,
    width: '100%',
    height: '100%',
  },
  title:{
    marginTop: 100,
    flex: 1,
    alignItems: 'center',
  },
  titleText:{
   // fontFamily: '210namuL',
    fontSize: 20,
  },
  descrption: {
    flex: 2,
    alignItems: 'center',
  },
  desText: {
    //fontFamily: '210namuL',
    fontSize: 20,
  },
  descrptionTop: {
    flex:1,
  },
  descrptionBottom: {
    flex:4,
    marginTop : 10,
    flexDirection: 'row',
  },
  playbuSt:{
  },
  alarmbuSt: {
    flex:1,
    width:'25%',
    height: '25%',
    marginTop:20,
  },
  hintText: {
    flex:2,
    fontSize : 14,
    marginTop:20,
    color: 'red',
  },
  hintContainer: {
    flex:5,
  },
  hint:{
    flex:3,
    flexDirection: 'row',
    justifyContent : 'space-between',
    marginRight: 80,
    marginLeft: 10,
  },
  hintImage: {
    flex:1,
    width:'40%',
    height: '40%',
  },
  element:{
      flex:6,
  },
  proContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent :'space-around',
    marginBottom: 30,
  },

});


