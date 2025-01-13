import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// ProductCard uses default function parameters instead of defaultProps
const ProductCard = ({ product = {} }) => {
  // Destructure product object with default values
  const { product_name = 'Default Product', product_description = 'No description available', product_picture = '', product_price = '₱0.00', product_stocks = 0 } = product;

  return (
    <View style={styles.card}>
      <Image source={{ uri: product_picture }} style={styles.image} />
      <Text style={styles.title}>{product_name}</Text>
      <Text style={styles.description}>{product_description}</Text>
      <View style={styles.priceAndStock}>
        <Text style={styles.price}>{product_price}</Text>
        <Text style={styles.stocks}>Stocks: {product_stocks}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginBottom: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover', // To maintain aspect ratio
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  priceAndStock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    color: '#27ae60',
  },
  stocks: {
    fontSize: 14,
    color: '#7f8c8d',
  },
});

export default ProductCard;
