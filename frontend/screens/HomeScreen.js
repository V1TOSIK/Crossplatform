import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import ModalExample from '../components/ModalExample';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Головний екран</Text>

      <Button
        title="Перейти на деталі"
        onPress={() =>
          navigation.navigate('Details', {
            message: 'Привіт з головного екрану!',
          })
        }
      />

      <ModalExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
