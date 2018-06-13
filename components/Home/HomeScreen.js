import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	StyleSheet,
} from 'react-native';
import {
	Button,
	Toast,
	Radio,
	Flex,
	List,
	Checkbox,
} from 'antd-mobile';
const CheckboxItem = Checkbox.CheckboxItem;
/*import styles from './HomeScreenStyle.js';*/
class Home extends Component {
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
			repair: [],
			check: false,
			tt: [],
		};
	}
	handleSubmit = () => {
		var arry = this.state.repair;
		var arrys = [];
		arry.map(item => {
			if (item[1]) {
				arrys.push(item[0]);
			}
		})
		console.log(arrys)
		//this.props.navigation.navigate("QrCode");
		/*this.props.navigation.navigate("BaiduMap");*/
		this.props.navigation.navigate('UserCenter')
	}
	onChange = (val, checked) => {
		console.log(val, checked);
		var arr = this.state.repair;
		var tt = this.state.tt;
		if (arr.length > 0) {
			arr.map((item, index) => {
				console.log(item[0])
				if (tt.indexOf(val) == -1) {
					console.log('tt3', tt)
					tt.push(val);
					console.log('tt4', tt)
					this.setState({
						tt: tt,
					})
				}
				console.log('tt1', tt)
			})
			console.log('tt2', tt)
			if (tt.indexOf(val) > -1) {
				arr.splice(tt.indexOf(val), 1, [val, checked.target.checked])
			} else {

				arr.push([val, checked.target.checked]);
			}
		} else {
			tt.push(val);
			this.setState({
				tt: tt,
			})
			arr.push([val, checked.target.checked]);
		}
		this.setState({
			repaire: arr,
		}, () => {
			console.log(this.state.repair)
		})

	}
	render() {
		const data = [{
			value: 0,
			label: '维修一'
		}, {
			value: 1,
			label: '维修二'
		}, {
			value: 2,
			label: '维修三'
		}, ];
		return <View style={{
        flex: 1,
        flexDirection: 'column',
        /*justifyContent: 'space-between',*/
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
        	<Text>I am one</Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        <View>
        	 <List renderHeader={() => 'CheckboxItem demo'}>
		        {data.map(i => (
		          <CheckboxItem key={i.value} onChange={(checked) => this.onChange(i.value,checked)}>
		            {i.label}
		          </CheckboxItem>
		        ))}
		        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
		          Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
		        </CheckboxItem>
		      </List>
        </View>
        <View><Button type='primary' onClick={this.handleSubmit}>测试消息提示框</Button></View>
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
	},
	radios: {
		padding: 2.5,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 2,
		marginRight: 5,
	}
});
export default Home;