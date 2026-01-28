import { Text, StyleSheet } from 'react-native';

function Footer({ text }) {
  return <Text style={styles.footer}>{text}</Text>;
}

const styles = StyleSheet.create({
  footer: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 40,
  },
});

export default Footer;
