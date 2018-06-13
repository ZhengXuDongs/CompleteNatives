import React, {
	Component
} from 'react';
import {
	View,
	TextInput,
	StyleSheet
} from 'react-native';
import theme from '../../../theme.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class PlainInput extends Component {

	render() {
		return <View style={[styles.plain,this.props.style]}>
		{this.props.iconName?<Icon size={this.props.size} name={this.props.iconName} />:null}
		<TextInput
	      autoCapitalize="none"
	      autoCorrect={false}
	      clearButtonMode="always"
	      underlineColorAndroid="transparent"
	      placeholderTextColor={theme.disableColor}
	      {...this.props}
	      style={[styles.input,this.props.inputStyle]}
	    />
	    </View>
	}
}

const styles = StyleSheet.create({
	plain: {
		flexDirection: 'row',
		borderWidth: 1,
		borderColor: theme.borderColor,
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	input: {
		borderWidth: 0,
		fontSize: 13,
		padding: 4,
		flex: 1,
	}
})
export default PlainInput;