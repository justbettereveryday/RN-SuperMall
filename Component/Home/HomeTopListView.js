import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width} = Dimensions.get('window');

var cols = 5;
var cellW = Platform.OS == 'ios' ? 70 : 60;
var cellH = 70;
var vMargin = (width - cellW * cols) / (cols + 1);

export default class HomeTopListView extends Component {

    static props={
        dataArr:[]
    }
    
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged:(row1,row2) => row1 !== row2});
        this.state = {
            //返回数据源
              //放置数组的方法
              dataSource:ds.cloneWithRows(this.props.dataArr)
          };
      }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                contentContainerStyle={styles.contentViewStyle}
                scrollEnabled={false}
            >
            </ListView>
        );
    }

    renderRow(rowdata){
        return(
            <TouchableOpacity onPress={()=>{alert('0')}}>
                <View style={styles.cellStyle}>
                    <Image source={{uri:rowdata.image}} style={{width:52,height:52}}/>
                    <Text style={styles.titleStyle}>{rowdata.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    contentViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
        width:width
    },
    
    cellStyle:{
        width:cellW,
        height:cellH,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:vMargin
    },
    
    titleStyle:{
        fontSize:Platform.OS == 'ios' ? 13 : 12,
        color:'gray'
    }
});

module.exports = HomeTopListView;