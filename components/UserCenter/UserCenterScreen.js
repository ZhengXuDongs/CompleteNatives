import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity
} from 'react-native';
import {
	Button,
	Toast,
	Radio,
	Flex,
	Modal,
	List,
} from 'antd-mobile';
const RadioItem = Radio.RadioItem;
import styles from './UserCenterScreenStyle.js';
class UserCenter extends Component{
	static navigationOptions = {
		headerLeft: null,
		headerTitleStyle:{
        	color:'white',
        	alignSelf:'center'
      	},
	}
	constructor(props) {
		super(props);
		this.state = {
			editable: false,
			account: "彩云",
			relname: "李秀宁",
			mobile:'13526899632',
			sex:'男',
			modal1:false,
			value:0,
		};
	}
	/*componentWillMount(){
		alert(JSON.stringify(this.props))
	}*/
	handleEditPress = () =>{
		/*alert(JSON.stringify(this.props.navigation.state.params))*/
		this.setState({
			editable:!this.state.editable,
		})
	}
	handleOperate = [
    	{
    		text:'取消',
    		onPress: () => {
    		 console.log('cancle'); 
    		 this.onClose('modal1')(); 
    		}
    	},
    	{
    		text:'确定',
    		onPress: () => {
    		 console.log('ok'); 
    		 this.onClose('modal1')(); 
    		}
    	},
    ]
    showModal = key => (e) => {
	    e.preventDefault(); // 修复 Android 上点击穿透
	    this.setState({
	      [key]: true,
	    });
	}
    onClose = key => () => {
	    this.setState({
	      [key]: false,
	    });
	 }
	  onChange = (value) => {
	    console.log('checkbox');
	    this.setState({
	      value:value,
	      sex:value==0?'男':'女',
	    });
	  };
	 onWrapTouchStart = (e) => {
	    // fix touch to scroll background page on iOS
	   	if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
	      return;
	    }
	    const pNode = closest(e.target, '.am-modal-content');
	    if (!pNode) {
	      e.preventDefault();
	    }
	  }
	  emptyOperate = () =>{

	  }
	render(){
		const {value} = this.state;
		const sexs = [
			{ value: 0, sex: '男' },
	      	{ value: 1, sex: '女' },
		];
		return(
		<View style={styles.UserCotain}>
			<View style={styles.UserList}>
				<Text style={styles.Userlist_text}>用户名：</Text>
				<TextInput
					multiline = {true}
					style={styles.Userlist_input}
					underlineColorAndroid="transparent"
					onChangeText={(account)=>this.setState({account})}
					value={this.state.account}
					editable={this.state.editable}
				 />
			</View>
			<View style={styles.UserList}>
				<Text style={styles.Userlist_text}>真实姓名：</Text>
				<TextInput
					multiline = {true}
					style={styles.Userlist_input}
					underlineColorAndroid="transparent"
					onChangeText={(relname)=>this.setState({relname})}
					value={this.state.relname}
					editable={this.state.editable}
				 />
			</View>
			<View style={styles.UserList}>
				<Text style={styles.Userlist_text}>手机号：</Text>
				<TextInput
					multiline = {true}
					style={styles.Userlist_input}
					underlineColorAndroid="transparent"
					onChangeText={(mobile)=>this.setState({mobile})}
					value={this.state.mobile}
					editable={this.state.editable}
				 />
			</View>
			<View style={styles.UserList}>
				<Text style={styles.Userlist_text}>性别：</Text>
				
				{/*<TextInput
					multiline = {true}
					style={styles.Userlist_input}
					underlineColorAndroid="transparent"
					onChangeText={(sex)=>this.setState({sex})}
					value={this.state.sex}
					editable={this.state.editable}
				 />*/}
				 <Text style={styles.Userlist_input_sex} onPress={this.state.editable?this.showModal('modal1'):this.emptyOperate}>{this.state.sex}</Text>
				
			</View>
			<View style={styles.Userlist_button}>
				<Button onClick={this.handleEditPress} type="primary"  style={{width:200,height:36}}>{this.state.editable?'完成':'修改'}</Button>
			</View>
			<Modal
			  visible={this.state.modal1}
	          transparent
	          maskClosable={false}
	          onClose={this.onClose('modal1')}
	          title="性别"
	          footer={this.handleOperate}
	          wrapProps={{ onTouchStart: this.onWrapTouchStart }}>
	          <View>
	          	 <List renderHeader={() => 'RadioItem demo'}>
			        {sexs.map(i => (
			          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
			            {i.sex}
			          </RadioItem>
			        ))}
			      </List>
	          </View>
	          
			</Modal>
		</View>
		)
	}
}
export default UserCenter;