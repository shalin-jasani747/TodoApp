import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../Containers/HomeScreen';
import ReduxSauceScreen from '../Containers/ReduxSauceScreen';
import ReduxScreen from '../Containers/ReduxScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ReduxScreen: {screen: ReduxScreen},
    ReduxSauceScreen: {screen: ReduxSauceScreen},
  },
  {
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
