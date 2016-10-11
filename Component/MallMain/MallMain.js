import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    Navigator,
    Image
} from 'react-native';

//导入外部组件类
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/MallHome');
var Shop = require('../Shop/MallShop');
var More = require('../More/MallMore');
var Mine = require('../Mine/MallMine');

export default class MallMain extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab:'home'
        };
      }

    render(){
        return(
            <TabNavigator>
                {/* 首页 */}
                {this.renderTabBarItem('首页','icon_tabbar_homepage','icon_tabbar_homepage_selected','home','首页',Home)}
                {/* 商家 */}
                {this.renderTabBarItem('商家','icon_tabbar_merchant_normal','icon_tabbar_merchant_selected','shop','商家',Shop)}
                {/* 我的 */}
                {this.renderTabBarItem('我的','icon_tabbar_mine','icon_tabbar_mine_selected','mine','我的',Mine)}
                {/* 更多 */}
                {this.renderTabBarItem('更多','icon_tabbar_misc','icon_tabbar_misc_selected','more','更多',More)}
            </TabNavigator>
            )
    }

    renderTabBarItem(title,iconName,selectedIconName,selectedTab,componentName,componnent,badageText){
        return(
            <TabNavigator.Item
                title={title}
                renderIcon={()=><Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={()=><Image source={{uri:selectedIconName}} style={styles.iconStyle}/>}
                onPress={()=>{this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText = {badageText}
            >

                <Navigator
                    initialRoute={{name:componentName,component:componnent}}
                    configureScene={()=>{
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route,navigator)=>{
                        let Component = route.component;
                        return <Component {...route.passProps} navigator={navigator}/>
                    }}
                />

            </TabNavigator.Item>
        )
    }
}

const styles=StyleSheet.create({
    iconStyle:{
        width: Platform.OS == 'ios' ? 30 : 25,
        height: Platform.OS == 'ios' ? 30 : 25
    },
    selectedTitleStyle:{
        color:'orange'
    }
})

module.exports = MallMain;