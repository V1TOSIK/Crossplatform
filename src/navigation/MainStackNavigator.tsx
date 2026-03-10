import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from '../constants/routes'
import HomeScreen from '../screens/HomeScreen'
import TaskScreen from '../screens/TaskScreen'
import { MainStackParamList } from './MainStackParamList'
import Header from '../components/Header'

const Stack = createNativeStackNavigator<MainStackParamList>()

export default function MainStackNavigator() {
  return (
    <Stack.Navigator
      id='main-navigation'
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <Stack.Screen name={ROUTES.HOME} component={HomeScreen} />
      <Stack.Screen name={ROUTES.TASKS} component={TaskScreen} />
    </Stack.Navigator>
  )
}