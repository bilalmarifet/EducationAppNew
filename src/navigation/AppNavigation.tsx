import React from "react";
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

import Home from "../screens/AppScreens/Home";
import Blank from "../screens/AppScreens/Blank";
import SideBar from "../screens/AppScreens/SideBar";
import Login from "../screens/AuthScreens/Login";
import AuthLoading from "../screens/AuthLoading";
import SignUpFirstScreen from '../screens/AppScreens/SignUp/SignUpFirstScreen'
import SignUpSecondScreen from '../screens/AppScreens/SignUp/SignUpSecondScreen'
import App from '../screens/AppScreens/Home/App'
import UserInfoScreen from "../screens/AppScreens/User/UserInfoScreen";
import HomeScreen from '../screens/AppScreens/Home/HomeScreen'
import VideoScreen from '../screens/AppScreens/Home/VideoScreen'
import SignUpSecondPhoneVerificationScreen from '../screens/AppScreens/SignUp/SignUpPhoneVerificationScreen'
const MainStack = createStackNavigator(
  {
    Home: { screen: Home },
    App : { screen :App },
    UserInfo : {screen: UserInfoScreen}
  },
  {
    initialRouteName: "UserInfo",
    // headerMode: "none",

  }
);




const EducationVideoStack = createStackNavigator({
  Home : HomeScreen,
  App : { screen :App },

  Video: VideoScreen

},{
  // headerMode:'none'
})



EducationVideoStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;

  let routeName = navigation.state.routes[navigation.state.index].routeName

  if ( routeName == 'Video' ) {
      tabBarVisible = false
  }

  return {
      tabBarVisible,
  }
}






const mainBottomTab = createBottomTabNavigator({
  UserInfo : {screen: UserInfoScreen},
  edcuation : EducationVideoStack
})



const AuthStack = createStackNavigator(
  {
    
    Login: { screen: Login },
    SignUpFirst : SignUpFirstScreen,
    SignUpSecond : SignUpSecondScreen,
    SignUpSecondPhoneVerification : SignUpSecondPhoneVerificationScreen
  },
  {
    initialRouteName: "Login",
    headerMode: "none"
  }
);

// const SignUpStack = createStackNavigator(
//   { 
//     signUpFirst : {screen : SignUpFirstScreen},
//     signUpSecond : {screen : SignUpSecondScreen},

//   },
//   {
//     initialRouteName: "signUpFirst",
//     headerMode: "none"
//   }
  
  
// )

const AppStack = createDrawerNavigator(
  {
    MainStack: { screen: MainStack },
    Blank: { screen: Blank }
  },
  {
    drawerWidth: width - 50,
    drawerPosition: "left",
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoading,
      AuthStack: AuthStack,
      AppStack: AppStack,

      MainStack : MainStack,
      mainBottomTab: mainBottomTab,
      VideoScreen: VideoScreen
      
    },
    {
      initialRouteName: "AuthStack",

    }
  )
);
