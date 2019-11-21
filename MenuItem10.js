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

class MenuItem10 extends React.Component{
    render(){
        return(
            <View style={styles.MenuItem10}>
            <TouchableOpacity activeOpacity = {.5} onPress={()=>this.props.navigation.push('Problem21')}>
                <Image
                    source={this.props.itemImage}
                    resizeMode='contain'
                    style={styles.image} />
            </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(MenuItem10);

const styles = StyleSheet.create({
    MenuItem10: {
        width: '100%',
        marginTop: 100,
    },
    image: {
        width: '90%',
        height: '90%',
        marginLeft: 20,
    }
})

AppRegistry.registerComponent('MenuItem10',()=>MenuItem10);