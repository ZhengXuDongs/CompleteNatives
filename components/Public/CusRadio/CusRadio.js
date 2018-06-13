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
/**
 * 使用实例：
 * <CusRadio title="" onChange={} options =[]/>
 */


class CusRadio extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value ? this.props.value : this.props.defaultValue ? this.props.defaultValue : 0,
		};
		this.iconName = this.props.iconName ? this.props.iconName : "circle-outline";
		this.activeiIconName = this.props.activeiIconName ? this.props.activeiIconName : "adjust";
	}
	componentWillReceiveProps(nextProps) {
		/*	console.log(29, nextProps);*/
		if (nextProps.value != this.state.value && nextProps.value) {
			this.setState({
				value: nextProps.value
			})
		}
	}
	handleClick = (index) => {
		this.setState({
			value: index
		})
		this.props.onChange ? this.props.onChange(index) : "";
	}
	render() {
		return <View style={[styles.body,this.props.style]}>
			<Text style={styles.title}>{this.props.title}</Text>
			{this.props.options.map((item,index)=>{
				return <TouchableOpacity key={index} style={[styles.radio,this.props.optionStyle]} onPress={this.handleClick.bind(this,index)}>
					<Icon size={this.props.size?this.props.size:18} color={this.state.value==index?theme.themeColor:theme.grey} 
						name={this.state.value==index?this.activeiIconName:this.iconName}/>
					<Text style={styles.text}>{this.props.label?item[this.props.label]:item.label}</Text>
				</TouchableOpacity>
			})}
		</View>
	}
}
const styles = StyleSheet.create({
	body: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	title: {
		color: theme.black,
	},
	radio: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 20,
	},
	text: {
		marginLeft: 5,
		color: theme.black,
	},
})
export default CusRadio;