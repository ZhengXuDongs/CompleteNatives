import {
	StyleSheet
} from 'react-native';
import theme from './theme.js';
export default StyleSheet.create({
	hide: {
		height: 50,
		display: 'none'
	},
	buttonTheme: {
		backgroundColor: theme.themeColor,
		borderColor: theme.themeColor,
	},
	header: {
		elevation: 0,
		shadowOpacity: 0,
		height: 48,
		backgroundColor: theme.navigatorColor,
	},
	headerTitleStyle: {
		textAlign: 'center',
		fontWeight: 'normal',
		fontSize: 16,
		flex: 1,
		color: 'white',
	},
	input: {
		borderWidth: 0.5,
		borderColor: theme.borderColor,
		fontSize: 13,
		padding: 4,
	},
	borderBottom: {
		borderBottomWidth: .5,
		borderBottomColor: theme.borderColor,
	},
	footer: {
		flexDirection: 'row',
		backgroundColor: 'white',
		elevation: 4,
	},
	left: {
		paddingLeft: 20,
		paddingVertical: 15,
		flex: 1,
		flexDirection: 'row',
	},
	leftText: {
		color: 'white',
		fontWeight: 'bold',

	},
	totalText: {
		color: theme.black,
	},
	right: {
		paddingHorizontal: 30,
		paddingVertical: 15,
		backgroundColor: theme.blue,
		justifyContent: 'center',
		color: 'white',
	},
	tabBarLeftIcon: {
		fontSize: 24,
		paddingLeft: theme.horizontal,
		color: theme.white,
	},
	navHeader: {
		backgroundColor: theme.navigatorColor,
		flexDirection: 'row',
		alignItems: 'center',
		height: 48,
	},
	navRight: {
		paddingRight: theme.horizontal,
		width: 24,
	},
	tabBarRightIcon: {
		fontSize: 24,
		paddingRight: theme.horizontal,
		color: theme.white,
	},
	tabBarRightText: {
		fontSize: 14,
		paddingRight: theme.horizontal,
		color: theme.white,
	},
	tabBarLeftText: {
		fontSize: 14,
		paddingLeft: theme.horizontal,
		color: theme.white,
	},
	userIcon: {
		width: 60,
		height: 60,
		marginRight: 10,
	},
	userHeader: {
		backgroundColor: theme.themeColor,
		paddingVertical: 34,
		paddingLeft: 10,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	userName: {
		fontSize: 18,
		marginBottom: 10,
		color: 'white',
	},
	userTel: {
		color: 'white'
	},
	body: {
		flex: 1,
		backgroundColor: theme.backgroundColor,
	},
	bodyTitle: {
		paddingHorizontal: theme.horizontal,
		paddingVertical: theme.vertical,
		color: theme.themeColor,
		backgroundColor: theme.backgroundColor
	},
	bodyItem: {
		paddingVertical: theme.vertical,
		backgroundColor: 'white',
		borderBottomWidth: .5,
		color: theme.titleFont,
		borderBottomColor: theme.borderColor,
	},
	bodyItemContent: {
		color: theme.fontColor,
	},
	shadow: {
		shadowOffset: {
			h: 1,
			w: 0
		},
		shadowColor: theme.shadowColor,
		shadowRadius: 3,
		shadowOpacity: 0.2,
		opacity: 4
	},
	tabBarIndicator: {
		height: 0,
		backgroundColor: 'red',
	}
});