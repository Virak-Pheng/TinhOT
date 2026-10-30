import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
}

export default function ProductCard({ product, onPress }: ProductCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.category}>{product.category.toUpperCase()}</Text>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    marginHorizontal: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  image: {
    width: '100%',
    height: 130,
    backgroundColor: '#f3f4f6',
  },
  content: {
    padding: 10,
  },
  category: {
    fontSize: 10,
    fontWeight: '600',
    color: '#4f46e5',
    marginBottom: 4,
  },
  name: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1f2937',
    height: 36,
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    fontWeight: '700',
    color: '#059669',
  },
});