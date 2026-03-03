import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../features/products/screens/HomeScreen';

export type RootStackParamList = {
  HomeTab: undefined;
  ProductDetails: { productId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator id="home-tab">
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator id="root-stack">
        <Stack.Screen
          name="HomeTab"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}