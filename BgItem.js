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

class BgItem extends React.Component{

    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} onPress={()=>this.props.navigation.push('Menu')}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image} />
            </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(BgItem);

const styles = StyleSheet.create({
    menuItem: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

AppRegistry.registerComponent('BgItem',()=>BgItem);