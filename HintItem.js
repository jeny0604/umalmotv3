import { withNavigation } from 'react-navigation';
import React from 'react';
import {
    View,
    Image,
    StyleSheet,
    AppRegistry,
    TouchableOpacity,
} from 'react-native';

class HintItem extends React.Component{
    callFun= () =>
    {
        alert("Preparing this function");
    }

    render(){
        return(
            <View style={styles.menuItem}>
            <TouchableOpacity activeOpacity = {.5} onPress={()=>this.callFun}>
                <Image
                    source={this.props.itemImage}
                    style={styles.image}
                    resizeMode='contain' />
            </TouchableOpacity>
            </View>
        );
    }
}

export default withNavigation(HintItem);

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

AppRegistry.registerComponent('HintItme',()=>HintItem);