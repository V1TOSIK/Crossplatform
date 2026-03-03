import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../types";
import { ProductPrice } from "./ProductPrice";

interface Props {
  product: Product;
  onPress?: () => void;
}

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.name}>{product.name}</Text>

      <ProductPrice
        amount={product.priceAmount}
        currency={product.priceCurrency}
      />

      <Text style={styles.location}>{product.location}</Text>

      <Text style={styles.description} numberOfLines={2}>
        {product.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  location: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
  },
  description: {
    fontSize: 14,
    color: "#444",
    marginTop: 8,
  },
});