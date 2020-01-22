import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Preload from './pages/Preload';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Inside from './pages/Inside';

const Routes = createAppContainer(
  createStackNavigator({
    Preload,
    Home,
    SignIn,
    SignUp,
    Inside,
  }, {
    defaultNavigationOptions: {
      header: null,
    }
  }),
);

export default Routes;
