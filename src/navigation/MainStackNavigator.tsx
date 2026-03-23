import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from '../constants/routes'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from "../screens/ProductScreen";
import ProfileScreen from "../screens/ProfileScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator()

export default function MainStackNavigator() {
  return (
        <Stack.Navigator
            id='main-navigation'
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
            <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
            <Stack.Screen name={ROUTES.REGISTER} component={RegisterScreen} />
            <Stack.Screen name={ROUTES.PROFILE} component={ProfileScreen} />
            <Stack.Screen name={ROUTES.PRODUCT} component={ProductScreen} />
        </Stack.Navigator>
  )
}