import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const products = [
  {
    id: '1',
    name: 'Honda SRF450R',
    year: 2024,
    price: 8695,
    oldPrice: 10000,
    discount: 15, // твоя картинка
    badge: 'SALE'
  },
  {
    id: '2',
    name: 'Honda SRF450R',
    year: 2024,
    price: 9700, // твоя картинка
    badge: 'NEW'
  }
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {item.badge && (
        <View style={[styles.badge, item.badge === 'SALE' ? styles.sale : styles.new]}>
          <Text style={styles.badgeText}>{item.discount ? `-${item.discount}%` : item.badge}</Text>
        </View>
      )}
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.year}>{item.year}</Text>
      <Text style={styles.price}>
        {item.oldPrice && <Text style={styles.oldPrice}>${item.oldPrice} </Text>}
        ${item.price}
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.iconButton}>
          <Text>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text>🛒</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  card: { backgroundColor: '#1e1e1e', borderRadius: 10, marginBottom: 16, padding: 10, maxWidth: 300 },
  image: { width: '100%', height: 150, borderRadius: 10 },
  name: { color: '#fff', fontSize: 16, fontWeight: 'bold', marginTop: 8 },
  year: { color: '#aaa', fontSize: 14 },
  price: { color: '#fff', fontSize: 16, marginTop: 4 },
  oldPrice: { textDecorationLine: 'line-through', color: '#ff5555' },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  iconButton: { padding: 8, backgroundColor: '#2a2a2a', borderRadius: 5 },
  badge: { position: 'absolute', top: 10, left: 10, padding: 5, borderRadius: 5 },
  sale: { backgroundColor: 'red' },
  new: { backgroundColor: 'green' },
  badgeText: { color: '#fff', fontWeight: 'bold' },
});