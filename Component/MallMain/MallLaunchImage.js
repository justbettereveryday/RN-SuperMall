import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var Main = require('./MallMain');

class MallLaunchImage extends Component{
    render(){
        return(
            <Image source={{uri:'LaunchImage'}} style={styles.ImageStyle}/>
        )
    }

    componentDidMount=()=>{
        setTimeout(()=>{
            this.props.navigator.replace({
                component:Main
            })
        },1500)
    }
}

const styles=StyleSheet.create({
    ImageStyle:{
        flex:1
    }
})

module.exports = MallLaunchImage;