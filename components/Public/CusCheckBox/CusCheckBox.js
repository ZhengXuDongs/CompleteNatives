import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '../../../theme.js';
class CusCheckBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			checked: this.props.checked ? this.props.checked : false,
		};
		this.iconName = this.props.iconName ? this.props.iconName : "checkbox-blank-outline";
		this.activeiIconName = this.props.activeiIconName ? this.props.activeiIconName : "checkbox-marked";
	}
	handleClick = () => {
		let checked = this.props.value ? !this.props.value : !this.state.checked;
		this.setState({
			checked: checked
		})
		this.props.onChange ? this.props.onChange(checked) : "";
	}
	render() {
		return <TouchableOpacity style={[styles.checkbox,this.props.style]} onPress={this.handleClick}>
			<Icon size={this.props.size} color={this.props.value?theme.themeColor:this.state.checked?theme.themeColor:theme.grey} 
			name={this.props.value?this.activeiIconName:this.state.checked?this.activeiIconName:this.iconName}/>
			<Text style={styles.text}>{this.props.title}</Text>
		</TouchableOpacity>
	}
}
const styles = StyleSheet.create({
	checkbox: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		marginLeft: 10,
		color: theme.black,
	},
})
export default CusCheckBox;