import React, {
	Component
} from 'react';
import {
	Text,
	View,
	TextInput,
	Image,
	ScrollView,
	AsyncStorage,
	StyleSheet,
	TouchableHighlight,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CusButton from '../Public/CusButton/CusButton.js';
import PlainInput from '../Public/PlainInput/PlainInput.js';
import theme from '../../theme.js';
import commonStyle from '../../AppStyle.js';
import httpHelper from '../../utils/httpHelper.js';
import CusLoading from '../Public/CusLoading/CusLoading.js';

class LoginScreen extends Component {

	constructor(props) {
		super(props);
		this.state = {
			account: '',
			password: '',
			time: 0,
			timeable: true,
			animating: false,
		};
		this._index = 60;
		this._timer = null;
	}

	countTime = () => {
		if (this.state.timeable) {
			this.setState({
				timeable: false
			})
			this._timer = setInterval(() => {
				this.setState({
					time: this._index--
				});
				if (this.state.time <= 0) {
					this._timer && clearInterval(this._timer);
					this.setState({
						timeable: true
					})
				}
			}, 1000);
		}


	}

	getCode = () => {

	}
	onButtonLogin = () => {
		this.props.navigation.navigate("MyApp")
	}

	componentWillUnmount() {
		if (this._timer) {
			clearInterval(this._timer)
		}
	}

	render() {
		return <ScrollView style={styles.loginContain}>
			<View style={styles.imageContain}>
				<Image
					style={styles.logoImg}
					source={require('../../img/logo.png')}/>
				<Text style={styles.logoRemark}>社修宝家电维修接单端</Text>
			</View>
			<View style={styles.inputs}>
				<Icon name="user" style={styles.icons}/>
				<TextInput
					autoFocus
					style={styles.loginInput}
					placeholder="请输入手机号"
					keyboardType="phone-pad"
					placeholderTextColor="#666666"
					placeholderTextSize="18px"
					underlineColorAndroid='transparent'
					onChangeText={(account) => this.setState({account})}
					value={this.state.account}
					/>
			</View>
			<View style={styles.line}/>
			<View style={styles.inputs}>
				<Icon name="lock" style={styles.icons}/>
				<TextInput
					style={styles.loginInput}
					placeholder="请输入验证码"
					placeholderTextColor="#666666"
					placeholderTextSize = "18px"
					underlineColorAndroid='transparent'
					onChangeText={(password) => this.setState({password})}
					value={this.state.password}
					/>
				<TouchableOpacity disabled={!this.state.timeable} onPress={this.countTime}>

					<Text style={styles.code}>{this.state.time<=0?'获取验证码':'获取验证码('+this.state.time+')'}</Text>
				</TouchableOpacity>
			</View>
			<View >
				<CusButton style={styles.btnLogin} color={theme.themeColor}
					title="登录"
					onPress ={this.onButtonLogin} />
			</View>
			<CusLoading animating={this.state.animating} label="登录中。。。"/>
		</ScrollView>
	}



}
const styles = StyleSheet.create({
	loginContain: {
		flexDirection: 'column',
		flex: 1
	},
	imageContain: {
		alignItems: 'center',
	},
	logoImg: {
		width: 72,
		height: 119,
		resizeMode: 'contain',
		marginTop: 56
	},
	logoRemark: {
		marginTop: 10,
		fontSize: 14,
		color: '#999999',
		marginBottom: 30,
	},
	inputs: {
		flexDirection: 'row',
		backgroundColor: 'white',
	},
	loginInput: {
		flex: 1,
		width: 200,
		backgroundColor: 'white',
		marginLeft: 10
	},
	icons: {
		lineHeight: 45,
		fontSize: 18,
		marginLeft: 10
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: '#d9d9d9'
	},
	code: {
		color: '#00a4e7',
		fontSize: 14,
		lineHeight: 45,
		marginRight: 10
	},
	btnLogin: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 48,
	}
})

export default LoginScreen;