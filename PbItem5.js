import { withNavigation } from 'react-navigation';
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';

class PbItem5 extends React.Component{

    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} onPress={()=>this.props.navigation.push('Problem6')}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image}
                    resizeMode='contain' />
            </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(PbItem5);

const styles = StyleSheet.create({
    menuItem: {
        width: '100%',
        height: '100%',
        marginTop: 250,
        marginBottom: 30,
    },
    image: {
        width: '60%',
        height: '60%',
        marginLeft: 80,
    }
})

AppRegistry.registerComponent('PbItme5',()=>PbItem5);