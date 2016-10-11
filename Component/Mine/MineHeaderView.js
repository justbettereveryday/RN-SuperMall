import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width}=Dimensions.get('window')

class MineHeaderView extends Component{

    render(){
        return(
            <View style={styles.container}>
                {this.renderTopView()}
                {this.renderBottomView()}
            </View>
        )
    }
    
    renderTopView(){
        return(
            <View style={styles.topViewStyle}>
                <Image source={{uri:'icon_tabbar_mine'}} style={styles.leftIconStyle}/>
                <View style={styles.centerViewStyle}>
                    <Text style={{fontSize:18,color:'white',fontWeight:'bold'}}>SuperMall</Text>
                    <Image source={{uri:'avator_vip'}} style={{width:17,height:17}}/>
                </View>
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginTop:8}}/>
            </View>
        )
    }
    
    renderBottomView(){
        return(
            <View style={styles.bottomViewStyle}>
                {this.renderBottomItem()}
            </View>
        )
    }
    
    renderBottomItem(){
        var itemArr = [];
        var data = [{'number':'100','title':'优惠券'},{'number':'12','title':'评价'},{'number':'50','title':'收藏'}];
        for(var i=0;i<data.length;i++){
            var item = data[i];
            
            itemArr.push(
                <TouchableOpacity key={i}>
                    <View style={styles.bottomInnerViewStyle}>
                        <Text style={{color:'white'}}>{item.number}</Text>
                        <Text style={{color:'white'}}>{item.title}</Text>
                    </View>
                </TouchableOpacity>
            )
        }
        return itemArr;
    }
}

const styles=StyleSheet.create({
    container:{
        height:Platform.OS == 'ios'?370:200,
        backgroundColor:'rgba(255,96,0,1.0)'
    },
    centerViewStyle:{
        flexDirection:'row',
        width:width*0.72,
    },
    topViewStyle:{
        flexDirection:'row',
        marginTop:Platform.OS == 'ios'?250:80,
        alignItems:'center',
        justifyContent:'space-around'
    },
    leftIconStyle:{
        width:70,
        height:70,
        borderRadius:35,
        borderWidth:3,
        borderColor:'rgba(0,0,0,0.2)'
    },
    bottomViewStyle:{
        flexDirection:'row',
        position:'absolute',
        bottom:0
    },
    bottomInnerViewStyle:{
        width:width/3+1,
        height:40,
        backgroundColor:'rgba(255,255,255,0.4)',
        justifyContent:'center',
        alignItems:'center',
        borderRightWidth:1,
        borderRightColor:'white'
    }
})

module.exports = MineHeaderView;
