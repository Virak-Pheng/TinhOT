import { Product } from '../types/product';

// Sample product data with name, price, description, and image
const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Canceling Headphones',
    price: 199.99,
    description: 'Immersive sound with active noise cancellation and 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
    category: 'Audio',
  },
  {
    id: '2',
    name: 'Ergonomic Mechanical Keyboard',
    price: 89.99,
    description: 'RGB backlit mechanical keyboard with tactile switches for peak typing performance.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80',
    category: 'Accessories',
  },
  {
    id: '3',
    name: 'Minimalist Smart Watch',
    price: 149.50,
    description: 'Track your health, notifications, and workouts with this sleek waterproof smartwatch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    category: 'Wearables',
  },
  {
    id: '4',
    name: 'Ultra-Wide Gaming Monitor',
    price: 499.00,
    description: '34-inch curved display with 144Hz refresh rate for stunning visuals and smooth gaming.',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    category: 'Displays',
  },
  {
    id: '5',
    name: 'Wireless Vertical Mouse',
    price: 45.99,
    description: 'Designed for comfort and ergonomics to reduce wrist strain during long work sessions.',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80',
    category: 'Accessories',
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    description: 'Water-resistant rugged speaker with deep bass and 12 hours of continuous playback.',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80',
    category: 'Audio',
  },
];

/**
 * Simulates fetching products from a remote API with latency and optional error simulation.
 */
export const fetchProducts = async (shouldFail = false): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Failed to fetch products from server. Please try again.'));
      } else {
        resolve(MOCK_PRODUCTS);
      }
    }, 1000); // 1 second network delay
  });
};

/**
 * Simulates fetching a single product by ID.
 */
export const fetchProductById = async (id: string): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = MOCK_PRODUCTS.find((p) => p.id === id);
      resolve(product);
    }, 500);
  });
};