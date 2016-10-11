import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Switch
} from 'react-native';

class MoreCell extends Component{

    static props={
        title:'',//标题
        isSwitch:false,//是否展示
        rightTitle:''
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOn:false
        };
      }

    render(){
        return(
            <TouchableOpacity onPress={()=>{alert(this.props.title.length)}}>
                <View style={styles.container}>
                    <Text style={{marginLeft:8}}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableOpacity>
        )
    }

    renderRightView=()=>{
        if(this.props.isSwitch){
            return (
                <Switch value={this.state.isOn == true} onValueChange={()=>{this.setState({isOn:!this.state.isOn})}} style={{marginRight:8}}/>
            )
        }
        else{
            return(
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {this.rightTitleView()}
                    <Image source={{uri:'icon_cell_rightArrow'}} style={{width:8,height:13,marginRight:8}}/>
                </View>
            )
        }
    }

    rightTitleView(){
        if(this.props.rightTitle)
        {
            return(
                <Text style={{color:'gray',marginRight:3}}>{this.props.rightTitle}</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{
        height:Platform.OS == 'ios' ? 40:30,
        backgroundColor:'white',
        borderBottomColor:'#dddddd',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})

module.exports = MoreCell;