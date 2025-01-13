import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Order History Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OrderHistoryScreen;  // Ensure you export it as default
