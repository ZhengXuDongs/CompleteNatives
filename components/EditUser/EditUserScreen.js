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
import theme from '../../theme.js';

class EditUserScreen extends Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	jumpScreen = () => {
		this.props.navigation.navigate("UserCenter");
	}

	render() {
		return <ScrollView>
                <View >
                    <View style={styles.userHeader}>
                        <Image source={require("../../public/image/user_header.jpg")} style={styles.userIcon} />
                        <View >
                            <Text style={styles.userName}>User Name</Text>
                            <Text style={styles.userTel}>123456666</Text>
                        </View>
                    </View>
                    <TouchableHighlight><Text onPress={this.jumpScreen} style={styles.menus}>个人中心</Text></TouchableHighlight>
                    <View style={styles.line} />
                    <Text onPress={this.jumpScreen} style={styles.menus}>设置</Text>
                </View>
            </ScrollView>
	}

}

const styles = StyleSheet.create({
	userHeader: {
		backgroundColor: theme.themeColor,
		paddingVertical: 34,
		paddingLeft: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	userIcon: {
		width: 60,
		height: 60,
		marginRight: 10,
	},
	menus: {
		paddingTop: 10,
		paddingBottom: 5,
		paddingLeft: 20,
		color: '#2e2b2e',
		backgroundColor: '#cccccc',
	},
	line: {
		borderTopWidth: 1,
		borderTopColor: '#d9d9d9'
	}
});

export default EditUserScreen;