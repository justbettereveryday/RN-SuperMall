import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    Image
} from 'react-native';

class CommonMyCell extends Component{

    static props={
        leftIconName:'',
        leftTitle:'',
        rightIconName:'',
        rightTitle:''
    }

    render(){
        return(
            <TouchableOpacity activeOpacity={0.5} onPress={()=>{alert(this.props.rightIconName)}}>
                <View style={styles.container}>
                    <View style={styles.leftViewStyle}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftImageStyle}/>
                        <Text style={styles.leftTitleStyle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightViewStyle}>{this.renderSubView()}</View>
                </View>
            </TouchableOpacity>
        )
    }

    renderSubView(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                {this.renderRightContent()}
                <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8,marginLeft:5}}/>
            </View>
        )
    }

    renderRightContent(){
        if(this.props.rightIconName == ''){
            return(
                <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
            )
        }
        else{
            return(
                <Image source={{uri:this.props.rightIconName}} style={{width:24,height: 13}}/>
            )
        }
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:'white',
        alignItems:'center',
        height: Platform.OS == 'ios'?40:36
    },
    leftViewStyle:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8
    },
    rightViewStyle:{

    },
    leftImageStyle:{
        width:24,
        height:24,
        marginRight:6,
        borderRadius:12
    },
    leftTitleStyle:{
        fontSize:16
    }
})

module.exports = CommonMyCell;