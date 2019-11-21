//https://stackoverflow.com/questions/42940896/calling-async-function-inside-non-async-function-in-react-native-firebase
//https://forums.expo.io/t/problem-with-audio-sound/5795

import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';


export default class PlayMusic extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} 
            onPress={()=>{
                const soundObject = new Expo.Audio.Sound();             
                try {
                    (async ()=> {
                        await soundObject.loadAsync(require('./sounds/Gee_short.mp3'));
                        await soundObject.playAsync();
                    })();
                  } catch (error) {
                    // An error occurred!
                  }
                }
            }>
                <Image
                    source={this.props.itemImage}
                    style={styles.image}
                    resizeMode='contain' />
            </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menuItem: {
        marginBottom: 50,
        marginLeft: 50,
        width: '33.3%',
        height: '100%',
    },
    image: {
        width: '60%',
        height: '100%',
    }
})

AppRegistry.registerComponent('PlayMusic',()=>PlayMusic);

