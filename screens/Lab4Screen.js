import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go"
        onPress={() => navigation.navigate('Details', { msg: 'Привіт!' })}
      />
    </View>
  );
}

function Details({ route }) {
  return <Text>{route.params.msg}</Text>;
}

export default function Lab4Screen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}