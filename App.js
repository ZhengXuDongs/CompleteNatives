/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  YellowBox,
  View,
  ScrollView,
  Image
} from 'react-native';

import {
  createDrawerNavigator,
  AppNavigator,
  DrawerItems,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  NavigationActions
} from 'react-navigation';
import TabBarBottom from 'react-navigation-tabs';

import styles from './AppStyle.js';
import Icon from 'react-native-vector-icons/FontAwesome';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

import HomeScreen from './components/Home/HomeScreen.js';
import LoginScreen from './components/Login/LoginScreen.js';
import UserCenterScreen from './components/UserCenter/UserCenterScreen.js';
import UserListScreen from './components/UserList/UserListScreen.js';
import EditUserScreen from './components/EditUser/EditUserScreen.js';

const tabRoutes = [{
  name: 'Home',
  screen: HomeScreen,
  label: '首页',
  iconName: 'home'
}, {
  name: 'Found',
  screen: UserListScreen,
  label: '发现',
  iconName: 'user-circle'
}, {
  name: 'UserCenter',
  screen: UserCenterScreen,
  label: '个人中心',
  iconName: 'user-circle'
}];


const formatRoutes = () => {
  let temp = {};
  tabRoutes.map((item) => {
    item.navigationOptions = ({
      navigation
    }) => ({
      headerTitle: item.label,
      tabBarLabel: item.label,
      tabBarIcon: ({
        focused,
        tintColor
      }) => (
        <Icon name={item.iconName} style={{color:tintColor,fontSize:25}}/>),
    })
    temp[item.name] = item;
  })
  return temp;
}

const Tab = createBottomTabNavigator(formatRoutes(), {
  /* {
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    backBehavior: 'initialRoute',
    initialRouteName: "",
    lazy: true,
    indicatorStyle: styles.tabBarIndicator,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: 'black',
      inactiveTintColor: '#979797',
      style: {
        backgroundColor: '#f7f7f7',
      },
    },*/
});


const MyApp = createDrawerNavigator({
  Tab: {
    screen: Tab,
  },
}, {
  drawerWidth: 200, // 抽屉宽
  drawerPosition: 'left', // 抽屉在左边还是右边
  contentOptions: {
    initialRouteName: '', // 默认页面组件
    activeTintColor: "#00A4E7", // 选中文字颜色
    activeBackgroundColor: '#fff', // 选中背景颜色
    inactiveTintColor: "#666", // 未选中文字颜色
    inactiveBackgroundColor: 'white', // 未选中背景颜色
    onItemPress: (route) => {
      console.log('-------->' + JSON.stringify(route))
    },
  },
  contentComponent: EditUserScreen,
  /*contentComponent: props => {
    console.log('contentComponent');
    console.log(props);
    return (
      <ScrollView>
                <View >
                    <View style={styles.userHeader}>
                        <Image source={require("./public/image/user_header.jpg")} style={styles.userIcon} />
                        <View >
                            <Text style={styles.userName}>User Name</Text>
                            <Text style={styles.userTel}>123456666</Text>
                        </View>
                    </View>
                    <DrawerItems {...props} /> 
                    <View><Text onPress={()=>{this.props.navigation.navigate("Home")}}>个人资料</Text></View>
                    <View><Text>个人资料</Text></View>
                </View>
            </ScrollView>
    )
  },*/
});

const navStack = createStackNavigator({
  Tab: {
    screen: Tab
  },
})


const LoginStack = createStackNavigator({
  SigIn: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: styles.hide
    }
  }
});


export default createSwitchNavigator({
  Nav: navStack,
  Login: LoginStack,
  Tab: Tab,
  MyApp: MyApp
}, {
  initialRouteName: 'Login',
})