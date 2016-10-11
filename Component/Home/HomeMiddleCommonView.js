/**
 * Created by SuperHeroLi on 16/10/6.
 */
import React,{Component} from 'react';
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

var HomeDetail = require('./HomeDetail')

export default class HomeMiddleCommonView extends Component{

    static props = {
        title:'',
        subTitle:'',
        rightIcon:'',
        titleColor:'',
        tplurl:'',//下级界面url
        callBackClickCell:null
    }

    render(){
        return (
            <TouchableOpacity onPress={()=>this.clickCell(this.props.tplurl)}>
                <View style={styles.container}>
                    {/* 左边 */}
                    <View>
                        <Text style={[{color:this.props.titleColor},styles.titleStyle]}>{this.props.title}</Text>
                        <Text style={styles.subtitleStyle}>{this.props.subTitle}</Text>
                    </View>
                    {/* 右边 */}
                    <Image source={{uri:this.props.rightIcon}} style={{width:64,height:43,resizeMode:'contain'}} />
                </View>
            </TouchableOpacity>
        )
    }

    clickCell(data){
        if(this.props.callBackClickCell == null) return;
        this.props.callBackClickCell(data);
    }

}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'white',
        width: width * 0.5 - 1,
        height:59,
        marginBottom:1,
        marginRight:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'
    },
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    },
    subtitleStyle:{
        color:'gray'
    }
});

module.exports = HomeMiddleCommonView;