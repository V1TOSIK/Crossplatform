import { View, Text, StyleSheet } from 'react-native';

function Header({ title }) {
  return <Text style={styles.header}>{title}</Text>;
}

function Footer({ text }) {
  return <Text style={styles.footer}>{text}</Text>;
}

export default function Lab2Screen() {
  return (
    <View style={styles.container}>
      <Header title="Головна сторінка" />
      <Footer text="© 2026" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'space-between', alignItems: 'center' },
  header: { fontSize: 24, fontWeight: 'bold' },
  footer: { fontSize: 16, color: 'gray' },
});