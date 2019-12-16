import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { ProductsScreen, FavoritesScreen } from './screens';

const AppNavigator = createBottomTabNavigator({
  ProductsScreen,
  FavoritesScreen,
});

export default createAppContainer(AppNavigator);
