/**
 * Created by SuperHeroLi on 16/10/6.
 */
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class HomeDetail extends Component{
    render(){
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={()=>{this.popTopHome()}}
                >
                    <Text style={styles.welcome}>负责测试</Text>
                </TouchableOpacity>
            </View>
            )
    }

    popTopHome(){
        this.props.navigator.pop();
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
});

module.exports = HomeDetail;