import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen({ route }) {
  const { message } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Екран деталей</Text>
      <Text style={styles.message}>{message}</Text>
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
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: 'gray',
  },
});
