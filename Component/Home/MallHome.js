import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Image,
    Platform,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

var HomeDetail = require('./HomeDetail');
var HomeTopView = require('./HomeTopView');
var MiddleView = require('./HomeMiddleView');
var MiddleBottomView = require('./HomeMiddleBottomView');
var ShopCenter = require('./HomeShopCenter');
var ShopCenterDeatil = require('./HomeShopCenterDetail');
var GustYouLike = require('./HomeGuessYouLike');

export default class MallHome extends Component{
    render(){
        return(
            <View style={styles.container}>
                {/* 导航 */}
                {this.renderNavBar()}
                {/* 主要内容 */}
                <ScrollView>
                    {/* 头部 */}
                    <HomeTopView/>
                    {/* 中间的内容 */}
                    <MiddleView />
                    {/* 中间下部的内容 */}
                    <MiddleBottomView
                        popToHome={(data)=>{this.pushToDetail(data)}}/>
                    {/* 购物中心 */}
                     <ShopCenter
                        popToHomeView = {(url)=>this.pushToShopCenterDetail(url)}
                    />
                    {/* 猜你喜欢 */}
                    <GustYouLike/>
                </ScrollView>
            </View>
        )
    }

    renderNavBar(){
        return (
            <View style={styles.navBarStyle}>
                {/* 左边 */}
                <TouchableOpacity style={{margin:5}} onPress={()=>{this.pushToDetail()}}>
                    <Text style={{color:'white',fontSize:18,marginTop:16}}>武汉</Text>
                </TouchableOpacity>
                {/* 中间 */}
                <TextInput
                    placeholder="输入商家,品类,商圈"
                    style={styles.topInputStyle}
                />
                {/* 右边 */}
                <View style={[styles.rightNavViewStyle,{marginTop:16}]}>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{alert('点击了')}}>
                        <Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    //跳转到购物中心详情页
    pushToShopCenterDetail(url){
        this.props.navigator.push(
            {
                //要跳转的模块
                component:ShopCenterDeatil,
                //传递参数
                passProps:{'url':this.dealWithUrl(url)}
            }
        )
    }

    //处理url
    dealWithUrl(url){
        return url.replace('imeituan://www.meituan.com/web/?url=','')
    }

    //跳转到二级界面
    pushToDetail(data){
        this.props.navigator.push({
            component:HomeDetail,
            title:'详情页'
        })
    }
}


const styles=StyleSheet.create({
  navBarStyle:{
      height:Platform.OS == 'ios' ? 64 : 44,
      backgroundColor:'rgba(255,96,0,1.0)',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
  },
    rightNavViewStyle:{
        flexDirection:'row',
        height:64,
        alignItems:'center'
    },
    topInputStyle:{
        width:width * 0.71,
        height:Platform.OS == 'ios' ? 35 : 30,
        backgroundColor:'white',
        marginTop:Platform.OS == 'ios' ? (64 - 16)/2 : 0,
        borderRadius:17,
        paddingLeft:10
    },
    navRightImgStyle:{
        width:Platform.OS == 'ios' ? 28 : 24,
        height:Platform.OS == 'ios' ? 28 : 24
    },
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    }
})

module.exports = MallHome;
