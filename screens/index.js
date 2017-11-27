import { Navigation } from 'react-native-navigation';

import SignIn from './SignIn';
import Home from './Home';
import Profile from './Profile';

import Menu from './Menu';
import Sppd from './Sppd';
import SppdDetail from './SppdDetail';
import Nontunai from './Nontunai';
import NontunaiDetail from './NontunaiDetail';
import RealisasiAnggaran from './RealisasiAnggaran';
import Message from './Message';


// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.SignIn', () => SignIn);
  Navigation.registerComponent('example.Home', () => Home, store, Provider);
  Navigation.registerComponent('example.Profile', () => Profile, store, Provider);

  Navigation.registerComponent('asis.Menu', () => Menu);
  Navigation.registerComponent('example.Sppd', () => Sppd, store, Provider);
  Navigation.registerComponent('example.SppdDetail', () => SppdDetail, store, Provider);
  Navigation.registerComponent('example.Nontunai', () => Nontunai, store, Provider);
  Navigation.registerComponent('example.NontunaiDetail', () => NontunaiDetail, store, Provider);

  Navigation.registerComponent('asis.RealisasiAnggaran', () => RealisasiAnggaran, store, Provider);
  Navigation.registerComponent('asis.Message', () => Message, store, Provider);


}
