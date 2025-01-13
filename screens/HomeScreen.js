import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import { products } from '../utils/constants';

const HomeScreen = () => {
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default HomeScreen;
