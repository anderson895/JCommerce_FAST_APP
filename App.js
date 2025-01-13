import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen'; // Assuming you already have HomeScreen
import CartScreen from './screens/CartScreen'; // You need to create these screens
import OrderHistoryScreen from './screens/OrderHistoryScreen'; // Ensure this path is correct
import SettingsScreen from './screens/SettingsScreen'; // Create SettingsScreen



// Create a separate Logout screen component
const LogoutScreen = () => {
  const handleLogout = () => {
    Alert.alert('Logged Out');
  };

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Order History" component={OrderHistoryScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
        <Drawer.Screen name="Logout" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
