import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Lab1Screen from './screens/Lab1Screen';
import Lab2Screen from './screens/Lab2Screen';
import Lab3Screen from './screens/Lab3Screen';
import Lab4Screen from './screens/Lab4Screen';
import Lab5Screen from './screens/Lab5Screen';
import Lab6Screen from './screens/Lab6Screen';
import Lab7Screen from './screens/Lab7Screen';
import Lab8Screen from './screens/Lab8Screen';
import Lab9Screen from './screens/Lab9Screen';
import Lab10Screen from './screens/Lab10Screen';
import Lab11Screen from './screens/Lab11Screen';
import Lab12Screen from './screens/Lab12Screen';
// import Lab13Screen from './screens/Lab13Screen';



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Lab1" component={Lab1Screen} />
        <Tab.Screen name="Lab2" component={Lab2Screen} />
        <Tab.Screen name="Lab3" component={Lab3Screen} />
        <Tab.Screen name="Lab4" component={Lab4Screen} />
        <Tab.Screen name="Lab5" component={Lab5Screen} />
        <Tab.Screen name="Lab6" component={Lab6Screen} />
        <Tab.Screen name="Lab7" component={Lab7Screen} />
        <Tab.Screen name="Lab8" component={Lab8Screen} />
        <Tab.Screen name="Lab9" component={Lab9Screen} />
        <Tab.Screen name="Lab10" component={Lab10Screen} />
        <Tab.Screen name="Lab11" component={Lab11Screen} />
        <Tab.Screen name="Lab12" component={Lab12Screen} />
        {/* <Tab.Screen name="Lab13" component={Lab13Screen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}