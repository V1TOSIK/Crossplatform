import React from "react";
import { FlatList, ActivityIndicator, View } from "react-native";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/ProductCard";

export const ProductsListScreen = () => {
  const { data, isLoading } = useProducts();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={data?.items ?? []}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
};