import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';

export default function CheckoutScreen() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'card'>('cod');
  const [loading, setLoading] = useState(false);

  const handlePlaceOrder = () => {
    if (!name.trim() || !address.trim() || !phone.trim()) {
      Alert.alert('Missing Information', 'Please fill in all shipping details.');
      return;
    }

    if (cart.length === 0) {
      Alert.alert('Cart is Empty', 'No items to checkout.');
      router.replace('/');
      return;
    }

    setLoading(true);

    // Simulate order placement processing
    setTimeout(() => {
      setLoading(false);
      clearCart();
      Alert.alert(
        'Order Placed Successfully! 🎉',
        'Thank you for your purchase. Your order is being processed.',
        [
          {
            text: 'Back to Home',
            onPress: () => router.dismissAll(),
          },
        ]
      );
    }, 1500);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Order Summary Box */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Total Items:</Text>
            <Text style={styles.summaryValue}>{cart.reduce((sum, item) => sum + item.quantity, 0)}</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryText}>Total Amount:</Text>
            <Text style={styles.totalValue}>${totalPrice.toFixed(2)}</Text>
          </View>
        </View>

        {/* Shipping Information Form */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Shipping Information</Text>
          
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="John Doe"
            placeholderTextColor="#9ca3af"
            value={name}
            onChangeText={setName}
          />

          <Text style={styles.label}>Delivery Address</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="123 Street Name, City, Country"
            placeholderTextColor="#9ca3af"
            value={address}
            onChangeText={setAddress}
            multiline
            numberOfLines={3}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 234 567 890"
            placeholderTextColor="#9ca3af"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Payment Method */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Payment Method</Text>
          
          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'cod' && styles.selectedPayment]}
            onPress={() => setPaymentMethod('cod')}
          >
            <Ionicons name="cash-outline" size={22} color={paymentMethod === 'cod' ? '#4f46e5' : '#4b5563'} />
            <Text style={[styles.paymentText, paymentMethod === 'cod' && styles.selectedPaymentText]}>
              Cash on Delivery (COD)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.paymentOption, paymentMethod === 'card' && styles.selectedPayment]}
            onPress={() => setPaymentMethod('card')}
          >
            <Ionicons name="card-outline" size={22} color={paymentMethod === 'card' ? '#4f46e5' : '#4b5563'} />
            <Text style={[styles.paymentText, paymentMethod === 'card' && styles.selectedPaymentText]}>
              Credit / Debit Card (Simulated)
            </Text>
          </TouchableOpacity>
        </View>

        {/* Place Order Button */}
        <TouchableOpacity
          style={[styles.placeOrderButton, loading && styles.disabledButton]}
          onPress={handlePlaceOrder}
          disabled={loading}
        >
          <Text style={styles.placeOrderButtonText}>
            {loading ? 'Processing Order...' : `Place Order ($${totalPrice.toFixed(2)})`}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 40,
  },
  sectionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  summaryText: {
    fontSize: 15,
    color: '#6b7280',
  },
  summaryValue: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1f2937',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#059669',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#f9fafb',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: '#1f2937',
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#f9fafb',
  },
  selectedPayment: {
    borderColor: '#4f46e5',
    backgroundColor: '#eef2ff',
  },
  paymentText: {
    fontSize: 15,
    color: '#4b5563',
    marginLeft: 10,
    fontWeight: '500',
  },
  selectedPaymentText: {
    color: '#4f46e5',
    fontWeight: 'bold',
  },
  placeOrderButton: {
    backgroundColor: '#4f46e5',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#9ca3af',
  },
  placeOrderButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});