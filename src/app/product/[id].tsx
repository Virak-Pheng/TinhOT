import { View, Text, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product Detail for ID: {id}</Text>
      <Button title="Go to Cart" onPress={() => router.push('/cart')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 12 },
  text: { fontSize: 18, fontWeight: 'bold' }
});