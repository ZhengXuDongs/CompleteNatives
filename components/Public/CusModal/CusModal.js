import React, {
	Component
} from 'react';
import {
	View,
	Modal,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

/***
 * <CusModal 
 * 		visible={this.state.modalVisible}
 * 		gravity="flex-end"
 * 		onClose={this._setModalVisible.bind(this,false)}
 * 		>
 *   	visible：控制显示
 *   	gravity：控制内容的位置：可选值flex-start,flex-end，center。默认为center
 *
 **/
class CusModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalVisible: this.props.modalVisible ? this.props.modalVisible : false
		};
	}
	_setModalVisible = () => {
		console.log("_setModalVisible")
		this.props.onClose ? this.props.onClose(false) : null;
	}
	render() {
		const buttonStyles = [styles.modalBody];
		if (this.props.gravity) {
			buttonStyles.push({
				justifyContent: this.props.gravity
			})
		} else {
			buttonStyles.push({
				justifyContent: 'center',
				paddingHorizontal: 20,
			})
		}
		return <Modal
			transparent={true}
			visible={this.props.visible}
          	onRequestClose={() => {this._setModalVisible(false)}}
		>
			<TouchableOpacity activeOpacity={1} style={buttonStyles} onPress={this._setModalVisible.bind(this)}>
				{this.props.children}
			</TouchableOpacity>
		</Modal>
	}
}
const styles = StyleSheet.create({
	modalBody: {
		flex: 1,
		backgroundColor: 'rgba(0, 0, 0,0.4 )',
	}
});
export default CusModal;