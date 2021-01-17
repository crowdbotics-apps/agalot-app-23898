import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList193946Navigator from '../features/NotificationList193946/navigator';
import Settings193945Navigator from '../features/Settings193945/navigator';
import Settings193937Navigator from '../features/Settings193937/navigator';
import UserProfile193935Navigator from '../features/UserProfile193935/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList193946: { screen: NotificationList193946Navigator },
Settings193945: { screen: Settings193945Navigator },
Settings193937: { screen: Settings193937Navigator },
UserProfile193935: { screen: UserProfile193935Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
