import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var CommonView = require('./HomeMiddleCommonView');

var TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json')

export default class HomeMiddleView extends Component{

    render(){
        return(
            <View style={styles.container}>
                {this.renderLeftView()}
                <View>
                    {this.renderRightView()}
                </View>
            </View>
        )
    }


    renderLeftView(){
        var data = TopMiddleData.dataLeft[0];

        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.leftViewStyle}>
                    <Image source={{uri:data.img1}} style={styles.leftImageStyle}/>
                    <Image source={{uri:data.img2}} style={styles.leftImageStyle}/>
                    <Text style={{color:'gray'}}>{data.title}</Text>
                    <View style={{flexDirection:'row',marginTop:5}}>
                        <Text style={{color:'blue',marginRight:5}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    renderRightView(){
        var itemArr = [];
        var rightData = TopMiddleData.dataRight;
        for(var i=0;i<rightData.length;i++){
            var data = rightData[i];

            itemArr.push(
                <CommonView
                    title={data.title}
                    subTitle={data.subTitle}
                    rightIcon={data.rightImage}
                    titleColor={data.titleColor}
                    key={i}/>
            )
        }
        return itemArr;
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:15
    },

    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    },

    leftViewStyle:{
        width:width * 0.5,
        height:119,
        backgroundColor:'white',
        marginRight:1,
        justifyContent:'center',
        alignItems:'center'
    },

    leftImageStyle:{
        width:120,
        height:30,
        resizeMode:'contain'
    }
})

module.exports = HomeMiddleView;