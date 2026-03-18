import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function Lab6Screen() {
  const [pressed, setPressed] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab6: Pressable</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          { backgroundColor: pressed ? 'darkblue' : 'blue' }
        ]}
        onPress={() => setPressed(!pressed)}
      >
        <Text style={styles.text}>
          {pressed ? 'Натиснуто 😎' : 'Натисни мене'}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  title: {
    fontSize:24,
    marginBottom:20
  },
  button: {
    padding:15,
    borderRadius:10
  },
  text: {
    color:'white',
    fontSize:18
  }
});