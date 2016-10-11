import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var TopMenu = require('../../LocalData/TopMenu.json');
var TopListView = require('./HomeTopListView');

export default class HomeTopView extends Component{

    // 构造
    constructor(props){
        super(props);
        // 初始状态
        this.state = {
            activePage:0
        };
    }

    render(){
        return(
            <View style={styles.container}>
                {/* 内容部分 */}
                <ScrollView
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onScrollAnimationEnd}
                >
                    {this.renderScrollItem()}
                </ScrollView>

                {/* 页码部分 */}
                <View style={styles.indicatorViewStyle}>
                    {this.renderIndicator()}
                </View>
            </View>
        )
    }
//每一帧滚动结束调用
    onScrollAnimationEnd=(e)=>{
        //算出当前页码
        var currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);
        this.setState({activePage:currentPage});
    }


//scrollView内部组件
    renderScrollItem(){
        var itemArr = [];
        var dataArr = TopMenu.data;
        for(var i=0;i<dataArr.length;i++){
            itemArr.push(
                <TopListView key={i} dataArr={dataArr[i]}/>
            )
        }
        return itemArr;
    }

//页码指示器
    renderIndicator(){
        var indicatorArr = [], style;
        for(var i=0;i<2;i++){
            style = (i === this.state.activePage) ? {color:'orange'} : {color:'gray'}

            indicatorArr.push(
                <Text key={i} style={[{fontSize:25},style]}>&bull;</Text>
            )
        }
        return indicatorArr;
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    },

    welcome:{
        fontSize:20,
        textAlign:'center',
        margin:10
    },

    indicatorViewStyle:{
        flexDirection:'row',
        justifyContent:'center'
    }
})

module.exports = HomeTopView;
