import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Listing Screen</Text>
      <Button title="Go to Product Detail (ID: 1)" onPress={() => router.push('/product/1')} />
      <Button title="Go to Cart" onPress={() => router.push('/cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  text: { fontSize: 18, fontWeight: 'bold' }
});