import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Preload from './pages/Preload';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Inside from './pages/Inside';

const Routes = createAppContainer(
    createStackNavigator({
        Preload: {
            screen: Preload,
            navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        SignIn: {
            screen: SignIn,
            navigationOptions: {
                header: null
            }
        },
        SignUp: {
            screen: SignUp,
            navigationOptions: {
                header: null
            }
        },
        Inside: {
            screen: Inside,
            navigationOptions: {
                header: null
            }
        }
    }),
);

export default Routes;
