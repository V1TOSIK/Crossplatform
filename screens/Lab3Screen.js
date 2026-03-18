import { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function Lab3Screen() {
  const [count, setCount] = useState(0);

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize:30 }}> {count} </Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}