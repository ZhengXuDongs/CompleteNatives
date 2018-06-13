import {
	StyleSheet
} from 'react-native';
export default StyleSheet.create({
	loginButton:{
		marginTop:20,
		width:'60%',
		justifyContent:'center',
	},
	contain:{
		justifyContent:'center',
		flex:1,
		alignItems:'center',
	},
	input:{
		width:'60%',
	},
	UserCotain:{
		marginTop:20,
		marginLeft:20,
		marginRight:20,
		borderRadius:5,
		backgroundColor:'white',
		paddingBottom:20,
		paddingTop:20,
	},
	UserList:{
		flexDirection: 'row',
		alignItems: 'center',
		borderColor: 'gray', 
		borderBottomWidth: 1,
	},
	Userlist_text:{
		width:'30%',
		textAlign:'right'
	},
	Userlist_input:{
		height: 36,
		marginTop:5,
		fontSize:14,
		marginLeft:20,
		width:'70%',
		textAlignVertical: 'bottom',
		color:'black'
	},
	Userlist_input_sex:{
		height: 36,
		fontSize:14,
		marginLeft:20,
		width:'70%',
		textAlignVertical: 'center',
		color:'black'
	},
	Userlist_button:{
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop:20
	},
	radios:{
		padding: 2,
	    borderWidth: 1,// '1 solid #ccc'
	    borderColor:'#ccc',
	    height: 36,
	    borderRadius: 18,
	    marginRight: 5
	}
});