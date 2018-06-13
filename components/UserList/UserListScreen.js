import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
	FlatList,
	Image,
	TouchableHighlight,
	ScrollView,
} from 'react-native';
import {
	Button,
	Toast,
	Accordion,
	List,
	Modal,
	WhiteSpace,
	WingBlank,
} from 'antd-mobile';
const alert = Modal.alert;
const datas = [{
	key: 1,
	name: '汪峰',
	sex: '男',
	age: 40
}, {
	key: 2,
	name: '汪峰1',
	sex: '男',
	age: 50
}, {
	key: 3,
	name: '汪峰2',
	sex: '男',
	age: 60
}];
const showAlert = () => {
	const alertInstance = alert('Delete', 'Are you sure???', [{
		text: 'Cancel',
		onPress: () => console.log('cancel'),
		style: 'default'
	}, {
		text: 'OK',
		onPress: () => console.log('ok')
	}, ]);
	setTimeout(() => {
		// 可以调用close方法以在外部close
		console.log('auto close');
		alertInstance.close();
	}, 500000);
};
class UserList extends Component {
	static navigationOptions = {
		headerLeft: null,
		headerTitleStyle: {
			color: 'white',
			alignSelf: 'center'
		},
	}
	constructor(props) {
		super(props);
		this.state = {
			account: "",
			password: "",
			datas: datas,
			moadal_1: false,
			modal_2: false,
		};
	}
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
	handleSubmit = () => {
		if (this.state.account == '1' && this.state.password == "1") {
			this.props.navigation.navigate("Home");
		} else {
			alert('账号或密码错误请重新输入！');
		}
	}
	_header = () => {
		return <Text>我是头部</Text>
	}
	_footer = () => {
		return <Text style={[styles.txt,{backgroundColor:'black'}]}>这是尾部</Text>;
	}

	_separator = () => {
		return <View style={{height:2,backgroundColor:'yellow'}}/>;
	}
	_onPress = (item) => {
		this.props.navigation.navigate("UserCenter", item);
	}
	refreshing = () => {
		const datas = [{
			key: 1,
			name: '汪峰3',
			sex: '男',
			age: 40
		}, {
			key: 2,
			name: '汪峰4',
			sex: '男',
			age: 50
		}, {
			key: 3,
			name: '汪峰5',
			sex: '男',
			age: 60
		}];
		this.setState({
			datas: datas,
		})
	}
	onChange = (key) => {
		/*alert(key)*/
	}
	handleList = (key) => {
		alert(JSON.stringify(key))
	}
	handleOperate = [{
		text: '取消',
		onPress: () => {
			console.log('cancle');
			this.onClose('modal1')();
		}
	}, {
		text: '确定',
		onPress: () => {
			console.log('ok');
			this.onClose('modal1')();
		}
	}, ]
	_keyExtractor = (item, index) => index + '';

	render() {
		return <View style={styles.contain}>
		 <ScrollView>
			<FlatList
			data={this.state.datas}
			ListHeaderComponent={this._header}
			ListFooterComponent={this._footer}
            ItemSeparatorComponent={this._separator}
            keyExtractor={this._keyExtractor}
            onRefresh={this.refreshing}
            refreshing={false}
			renderItem={({item})=>
			<TouchableHighlight onPress={() => this._onPress(item)}>
				<View style={styles.listContain}>
					<View><Image style={styles.images} source={require('../../public/image/user_header.jpg')} /></View>
					<View><Text>{item.name}</Text>
					<Text>{item.age}</Text></View>
				</View>
			</TouchableHighlight>
			}
			/>
			<Accordion defaultActiveKey="0" onChange={this.onChange}>
				<Accordion.Panel header="Title 1">
	            <List>
	              	<List.Item  style={{height:30}} onClick={this.handleList.bind(this,1)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,2)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,3)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,4)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,5)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,6)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,7)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,8)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,9)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,10)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,11)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,12)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,13)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,14)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
					<List.Item  style={{height:30}} onClick={this.handleList.bind(this,15)}>
			            <View style={styles.listitem}>
							<Text>张三</Text>
							<Text>张唉</Text>
						</View>
					</List.Item>
	            </List>
	          </Accordion.Panel>
			</Accordion>
			<Button type='primary' onClick={this.showModal('modal1')}>测试消息提示框</Button>
			<Modal
			  visible={this.state.modal1}
	          transparent
	          maskClosable={false}
	          onClose={this.onClose('modal1')}
	          title="审核"
	          footer={this.handleOperate}
	          wrapProps={{ onTouchStart: this.onWrapTouchStart }}>
	          <View>
	          	<Text>assaa</Text>
	          	<Text>assaa</Text>
	          	<Text>assaa</Text>
	          	<Text>assaa</Text>
	          </View>
	          
			</Modal>
			</ScrollView>
		</View>
	}
}
const styles = StyleSheet.create({
	bigblue: {
		color: 'blue',
		fontWeight: 'bold',
		fontSize: 30,
	},
	red: {
		color: 'red',
	},
	images: {
		width: 40,
		height: 40
	},
	listContain: {
		flexDirection: 'row',
		backgroundColor: 'white',
		marginBottom: 20
		/*justifyContent: 'space-between',*/
	},
	listitem: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: '#ddd',
		borderBottomWidth: 1,
		paddingBottom: 5,
		paddingTop: 5,
	}
});
export default UserList;