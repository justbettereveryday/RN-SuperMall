import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image
} from 'react-native';

var CommonCell = require('./HomeBottomCommonCell');

var Home_D5 = require('../../LocalData/Home_D5.json');

export default class HomeShopCenter extends Component{
    static props={
        popToHomeView:null
    }

    render(){
        return(
            <View style={styles.container}>
                <CommonCell
                    leftIcon='gw'
                    leftTitle="购物中心"
                    rightTitle={Home_D5.tips}
                />
                {/* 下部分 */}
                <ScrollView
                    style={styles.scrollViewStyle}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        )
    }


    //返回所有Item
    renderAllItem(){
        var itemArr = [];
        var shopData = Home_D5.data;
        for(var i=0;i<shopData.length;i++){
            var data = shopData[i];
            itemArr.push(
                <HomeShopCenterItem
                    shopImage={data.img}
                    shopSale={data.showtext.text}
                    shopName={data.name}
                    detailurl={data.detailurl}
                    key={i}
                    popTopShopCenter={(url)=>this.popTopHome(url)}
                />
            )
        }
        return itemArr;
    }

    popTopHome(url){
       if(this.props.popToHomeView == null) return;
        this.props.popToHomeView(url);
    }
}


//单个商场
class HomeShopCenterItem extends Component{
    static props={
        shopImage:'',
        shopSale:'',
        shopName:'',
        detailurl:'',
        popTopShopCenter:null
    }

    render(){
        return (
            <TouchableOpacity onPress={()=>this.clickItem(this.props.detailurl)}>
                <View style={styles.itemViewStyle}>
                    <Image source={{uri:this.props.shopImage}} style={styles.imageStyle}/>
                    <Text style={styles.shopSaleStyle}>{this.props.shopSale}</Text>
                    <Text style={styles.shopNameStyle}>{this.props.shopName}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    clickItem(url){
        if(this.props.detailurl == null) return;
        this.props.popTopShopCenter(url);
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop:15
    },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    },
    imageStyle:{
        width:120,
        height:100,
        borderRadius:8
    },
    scrollViewStyle:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:10
    },

    itemViewStyle:{
        margin:8
    },
    shopSaleStyle:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:2
    },
    shopNameStyle:{
        textAlign:'center',
        marginTop:5
    }
})

module.exports = HomeShopCenter;