import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';


export default class PlayMusic23 extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} 
            onPress={()=>{
                const soundObject = new Expo.Audio.Sound();             
                try {
                    (async ()=> {
                        await soundObject.loadAsync(require('./sounds/growl.mp3'));
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

AppRegistry.registerComponent('PlayMusic23',()=>PlayMusic23);

