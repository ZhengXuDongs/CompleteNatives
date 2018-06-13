import React, {
	Component
} from 'react';
import {
	View,
	Button,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableNativeFeedback
} from 'react-native';
import theme from '../../../theme.js';
import Platform from 'Platform';

/**
 * 自定义按钮
 * android：点击效果：水泼纹
 * ios：降低透明底，
 * 使用
 * <CusButton style={styles.button}
 * color={theme.themeColor}
 * title="确定"
 * onPress ={this.handleClick} />
 */

class CusButton extends Component {

	render() {
		const {
			accessibilityLabel,
			color,
			onPress,
			title,
			hasTVPreferredFocus,
			disabled,
			testID,
		} = this.props;
		const buttonStyles = [styles.button];
		const textStyles = [styles.text];
		const bodyStyle = [];
		if (color) {
			if (Platform.OS === 'ios') {
				buttonStyles.push({
					backgroundColor: color,
					borderColor: color,
				});
				bodyStyle.push({
					flexDirection: 'row',
				})
			} else {
				buttonStyles.push({
					backgroundColor: color
				});
			}
		}
		if (disabled) {
			buttonStyles.push(styles.buttonDisabled);
			textStyles.push(styles.textDisabled);
		}
		const formattedTitle = Platform.OS === 'android' ? title.toUpperCase() : title;
		const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

		return <Touchable
        	accessibilityComponentType="button"
	        accessibilityLabel={accessibilityLabel}
	        hasTVPreferredFocus={hasTVPreferredFocus}
	        testID={testID}
	        disabled={disabled}
	        style={bodyStyle}
	        onPress={onPress}>
	        <View style={[buttonStyles,this.props.style]}>
	          <Text style={[textStyles,this.props.textStyle]} disabled={disabled}>{formattedTitle}</Text>
	        </View>
      	</Touchable>
	}
}

const styles = StyleSheet.create({
	button: Platform.select({
		ios: {
			backgroundColor: theme.themeColor,
			borderColor: theme.themeColor,
			borderRadius: 4,
			borderWidth: 2,
		},
		android: {
			elevation: 4,
			// Material design blue from https://material.google.com/style/color.html#color-color-palette
			backgroundColor: theme.themeColor,
			borderRadius: 4,
		},
	}),
	text: {
		color: 'white',
		textAlign: 'center',
		padding: 8,
		fontWeight: '500'
	},
	buttonDisabled: Platform.select({
		ios: {},
		android: {
			elevation: 0,
			backgroundColor: '#dfdfdf',
		}
	}),
	textDisabled: Platform.select({
		ios: {
			color: '#cdcdcd',
		},
		android: {
			color: '#a1a1a1',
		}
	}),
})
export default CusButton;