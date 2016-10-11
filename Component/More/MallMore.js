import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Platform,
    ScrollView,
    Image
} from 'react-native';

var MoreCell = require('./MoreCell');

class MallMore extends Component{

    render(){
        return(
            <View style={styles.container}>
                {this.renderNavBar()}

                <ScrollView>
                    <View style={{marginTop:20}}>
                        <MoreCell title="扫一扫"/>
                    </View>

                    <View style={{marginTop:20}}>
                        <MoreCell title="省流量模式" isSwitch={true}/>
                        <MoreCell title="消息提醒"/>
                        <MoreCell title="邀请好友使用"/>
                        <MoreCell title="清空缓存" rightTitle="1.00M"/>
                    </View>

                    <View style={{marginTop:20}}>
                        <MoreCell title="问卷调查"/>
                        <MoreCell title="支付帮助"/>
                        <MoreCell title="网络诊断"/>
                        <MoreCell title="我要应聘"/>
                    </View>

                    <View style={{marginTop:20}}>
                        <MoreCell title="给我们打分" />
                    </View>
                </ScrollView>
            </View>
         )
    }

    renderNavBar(){
        return(
            <View style={styles.navOutViewStyle}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold',marginTop:10}}>更多</Text>
                <TouchableOpacity onPress={()=>{alert('点了')}} style={styles.rightViewStyle}>
                    <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle}/>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navImageStyle:{
        width:Platform.OS == 'ios'?28:24,
        height:Platform.OS == 'ios'?28:24
    },
    rightViewStyle:{
        position:'absolute',
        right:10,
        bottom:Platform.OS == 'ios' ? 15:13
    },
    navOutViewStyle:{
        height:Platform.OS == 'ios'?64:44,
        backgroundColor:'rgba(255,96,0,1.0)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    container:{
        flex:1,
        backgroundColor:'#e8e8e8'
    }
})

module.exports = MallMore;