//https://www.youtube.com/watch?v=dEqsPnehMkc
//https://kylewbanks.com/blog/fullscreen-background-image-in-react-native
//https://www.youtube.com/watch?v=ocnxJtZ6JOg >>navigator

import React from 'react';
import {createStackNavigator} from 'react-navigation';
import SelectMenu from './SelectMenu';
import IntroScreen from './IntroScreen';
import Problemfir from './Problemfir';
import Problem2 from './Problem2';
import Problem3 from './Problem3';
import Problem4 from './Problem4';
import Problem5 from './Problem5';
import Problem6 from './Problem6';
import Problem7 from './Problem7';
import Problem8 from './Problem8';
import Problem9 from './Problem9';
import Problem10 from './Problem10';
import Problem11 from './Problem11';
import Problem12 from './Problem12';
import Problem13 from './Problem13';
import Problem14 from './Problem14';
import Problem15 from './Problem15';
import Problem21 from './Problem21';
import Problem22 from './Problem22';
import Problem23 from './Problem23';
import Problem24 from './Problem24';
import Problem25 from './Problem25';
import ScoreScreen from './ScoreScreen';
import Score2 from './Score2';


export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator /> 
    );
  }
}

const AppStackNavigator = createStackNavigator(
  {
  //나열된 순서대로 순위를 매기는 것 같네요
  Intro:{
    screen: IntroScreen,
    //introscreen
  },
  Menu:{
    screen: SelectMenu,
    //selectMenu
  },
  Problemfir:{
    screen: Problemfir,
    //문제 화면
  },
  Problem2:{
    screen: Problem2,
  },
  Problem3: {
    screen: Problem3,
  },
  Problem4: {
    screen: Problem4,
  },
  Problem5: {
    screen: Problem5,
  },
  Problem6: {
    screen: Problem6,
  },
  Problem7: {
    screen: Problem7,
  },
  Problem8: {
    screen: Problem8,
  },
  Problem9: {
    screen: Problem9,
  },
  Problem10: {
    screen: Problem10,
  },
  Problem11: {
    screen: Problem11,
  },
  Problem12: {
    screen: Problem12,
  },
  Problem13: {
    screen: Problem13,
  },
  Problem14: {
    screen: Problem14,
  },
  Problem15: {
    screen: Problem15,
  },
  Problem21: {
    screen: Problem21,
  },
  Problem22: {
    screen: Problem22,
  },
  Problem23: {
    screen: Problem23,
  },
  Problem24: {
    screen: Problem24,
  },
  Problem25: {
    screen: Problem25,
  },
  Score:{
    screen: ScoreScreen,
    //점수화면
  },
  Score2:{
    screen:Score2,
  }
},
{
  initialRouteName: 'Intro',
  headerMode: 'none',
}
)

