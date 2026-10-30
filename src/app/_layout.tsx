import { Stack } from 'expo-router';
import { CartProvider } from '../context/CartContext';

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4f46e5',
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ title: 'TinhOT - Product Catalog' }} 
        />
        <Stack.Screen 
          name="product/[id]" 
          options={{ title: 'Product Details' }} 
        />
        <Stack.Screen 
          name="cart" 
          options={{ title: 'Shopping Cart' }} 
        />
        <Stack.Screen 
          name="checkout" 
          options={{ title: 'Checkout' }} 
        />
      </Stack>
    </CartProvider>
  );
}