import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';

import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider); // this is where you register all of your app's screens


Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./img/icons/home-inactive.png'),
      selectedIcon: require('./img/icons/home-active.png'), // iOS only
      title: 'A S I S'
    },
    {
      screen: 'asis.Message',
      icon: require('./img/icons/message-incative.png'),
      selectedIcon: require('./img/icons/message-active.png'), // iOS only
      title: 'Chatting'
    },
    {
      screen: 'example.Profile',
      icon: require('./img/icons/profile-inactive.png'),
      selectedIcon: require('./img/icons/profile-active.png'), // iOS only
      title: 'Profile'
    },
    {
      screen: 'asis.Menu',
      icon: require('./img/icons/menu-inactive.png'),
      selectedIcon: require('./img/icons/profile-active.png'), // iOS only
      title: 'Menu Asis'
    },
  ]
});


// start the app
// Navigation.startSingleScreenApp({
//   screen: {
//     screen: 'example.SignIn', // unique ID registered with Navigation.registerScreen
//     title: 'Welcome To ASIS',
//     headerTitleStyle:{ color: 'green'},
//     // topTabs: [
//     //       {
//     //         screenId: 'example.WelcomeScreen',
//     //         title: 'tab 1'
//     //       },
//     //       {
//     //         screenId: 'example.Sppd',
//     //         title: 'tab 2'
//     //       }
//     // ]
//   },
//   style: {
//     backgroundBlur: "dark", // 'dark' / 'light' / 'xlight' / 'none' - the type of blur on the background
//     backgroundColor: "#ff000080", // tint color for the background, you can specify alpha here (optional)
//     tapBackgroundToDismiss: true // dismisses LightBox on background taps (optional)
//   },
//   animationType: 'slide-down',
// });
