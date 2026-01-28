import { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Header title="Лічильник натискань" />
      <Text style={styles.counter}>Лічильник: {count}</Text>

      <View style={styles.buttons}>
        <Button title="-" onPress={() => setCount(prev => prev - 1)} />
        <Button title="+" onPress={() => setCount(prev => prev + 1)} />
      </View>
      <Footer text="© 2024 College Access System" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontSize: 30,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});
