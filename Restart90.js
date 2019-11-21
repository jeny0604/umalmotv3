//https://reactnativecode.com/add-onpress-onclick-image/

import { withNavigation } from 'react-navigation';
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';

class Restart90 extends React.Component{
    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} onPress={()=>this.props.navigation.push('Problem11')}>
                <Image
                    source={this.props.itemImage}
                    resizeMode='contain'
                    style={styles.image} />
            </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(Restart90);

const styles = StyleSheet.create({
    menuItem: {
        width: '100%',
        marginTop: 30,
    },
    image: {
        width: '90%',
        height: '90%',
        marginLeft: 20,
    }
})

AppRegistry.registerComponent('Restart90',()=>Restart90);