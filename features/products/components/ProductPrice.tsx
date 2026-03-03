import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  amount: number;
  currency: string;
}

export const ProductPrice: React.FC<Props> = ({ amount, currency }) => {
  return (
    <Text style={styles.price}>
      {amount.toLocaleString()} {currency}
    </Text>
  );
};

const styles = StyleSheet.create({
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "#2e7d32",
  },
});