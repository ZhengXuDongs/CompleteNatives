import React, {
	Component
} from 'react';
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet
} from 'react-native';
import CusModal from '../CusModal/CusModal.js';
import theme from '../../../theme.js';


/***
 * <CusLoading 
 * 		animating={this.state.animating}
 * 		style={styles.body}
 * 		label="loading"
 * 		>
 *   	animating：控制显示
 *   	label：文字
 *
 **/

class CusLoading extends Component {
	render() {
		return <CusModal
			visible={this.props.animating}
 		>
 			<View style={this.props.style}>
	 			<ActivityIndicator
			        animating={true}
			        color={this.props.color?this.props.color:theme.titleFont}
			        size={this.props.size?this.props.size:"large"}
			    />
				<Text style={styles.loadingText}>{this.props.label}</Text>
			</View>
		</CusModal>
	}
}
const styles = StyleSheet.create({
	loadingText: {
		color: theme.titleFont,
		textAlign: 'center',
	}
})
export default CusLoading;