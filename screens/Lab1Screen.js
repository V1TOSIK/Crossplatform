import { View, Text, StyleSheet } from 'react-native';

export default function Lab1Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привіт, React Native!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, color: 'blue' },
});