/**
 * Created by SuperHeroLi on 16/10/6.
 */
import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity
} from 'react-native';

export default class HomeBottomCommonCell extends Component{
    static props={
        leftIcon:'',
        leftTitle:'',
        rightTitle:''
    }

    render(){
        return(
            <TouchableOpacity onPress={()=>{alert('点击了')}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIcon}} style={{width:23,height:23,marginRight:5}}/>
                        <Text style={{fontSize:17}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>
                        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}}/>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:44,
        flexDirection:'row',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.5
    },

    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },

    rightViewStyle:{
        flexDirection:'row',
        alignItems:'center'
    }
})

module.exports = HomeBottomCommonCell;