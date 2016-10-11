/**
 * Created by SuperHeroLi on 16/10/6.
 */
import React,{Component} from 'React';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

//导入json数据
var Home_D4 = require('../../LocalData/Home_D4.json');

//引入外部组件
var CommonView = require('./HomeMiddleCommonView');

export default class HomeMiddleBottomView extends Component{
    static props={
        popToHome:null
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.bottomViewStyle}>
                    {this.renderBottomItem()}
                </View>
            </View>
        )
    }

    //下部分的所有子组件
    renderBottomItem(){
        //组件数组
        var itemArr = [];
        //拿到对应的数据
        var dataArr = Home_D4.data;
        //遍历
        for(var i=0;i<dataArr.length;i++){
            //取出单独的数据
            var itemData = dataArr[i];
            //创建组件,装入数据
            itemArr.push(
                <CommonView
                    title={itemData.maintitle}
                    subTitle={itemData.deputytitle}
                    rightIcon={this.dealWithImage(itemData.imageurl)}
                    titleColor={itemData.typeface_color}
                    tplurl={itemData.tplurl}
                    key={i}
                    callBackClickCell={(data)=>this.popToTopView(data)}
                />
            )
        }

        return itemArr;
    }

    //继续往父级界面传递数据
    popToTopView(data){
        //继续执行回调函数
        this.props.popToHome(data);
    }

    //处理图像尺寸
    dealWithImage(url){
        console.log(url);
        if(url.search('w.h') == -1){
        //没有找到
            return url;
        }
        else{
            return url.replace('w.h','120.90');
        }
    }
}

const styles=StyleSheet.create({
    container:{
        marginTop:15
    },
    bottomViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center'
    }
})

module.exports = HomeMiddleBottomView;