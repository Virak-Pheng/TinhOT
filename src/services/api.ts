import { Product } from "../types/product";

// Sample product data with name, price, description, and image
const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    description:
      "Immersive sound with active noise cancellation and 30-hour battery life.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
  },
  {
    id: "2",
    name: "Ergonomic Mechanical Keyboard",
    price: 89.99,
    description:
      "RGB backlit mechanical keyboard with tactile switches for peak typing performance.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "3",
    name: "Minimalist Smart Watch",
    price: 149.5,
    description:
      "Track your health, notifications, and workouts with this sleek waterproof smartwatch.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
  },
  {
    id: "4",
    name: "Ultra-Wide Gaming Monitor",
    price: 499.0,
    description:
      "34-inch curved display with 144Hz refresh rate for stunning visuals and smooth gaming.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    category: "Displays",
  },
  {
    id: "5",
    name: "Wireless Vertical Mouse",
    price: 45.99,
    description:
      "Designed for comfort and ergonomics to reduce wrist strain during long work sessions.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "6",
    name: "Portable Bluetooth Speaker",
    price: 79.99,
    description:
      "Water-resistant rugged speaker with deep bass and 12 hours of continuous playback.",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
    category: "Audio",
  },
  {
    id: "7",
    name: "4K Action Camera",
    price: 299.99,
    description:
      "Capture your adventures in crystal-clear 4K resolution with advanced stabilization.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    category: "Cameras",
  },
  {
    id: "8",
    name: "USB-C Multi-Port Hub",
    price: 34.99,
    description:
      "Expand your connectivity with 4K HDMI, USB 3.0 ports, and power delivery pass-through.",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "9",
    name: "Smart LED Desk Lamp",
    price: 49.99,
    description:
      "Adjustable color temperatures and brightness levels with touch controls and USB charging port.",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf39f574?w=500&q=80",
    category: "Lighting",
  },
  {
    id: "10",
    name: "Wireless Charging Pad",
    price: 29.99,
    description:
      "Fast-charging sleek pad compatible with all Qi-enabled smartphones and accessories.",
    image:
      "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "11",
    name: "Noise-Isolating Earbuds",
    price: 59.99,
    description:
      "Compact wireless earbuds with rich sound profile and secure fit for active lifestyles.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Audio",
  },
  {
    id: "12",
    name: "External Solid State Drive 1TB",
    price: 119.99,
    description:
      "Lightning-fast read and write speeds in a rugged, pocket-sized aluminum enclosure.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
    category: "Storage",
  },
  {
    id: "13",
    name: "Adjustable Laptop Stand",
    price: 39.99,
    description:
      "Improve your posture with an ergonomic, foldable aluminum stand compatible with all laptops.",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "14",
    name: "Smart Wi-Fi Plug",
    price: 19.99,
    description:
      "Control your home appliances remotely and monitor energy usage via smartphone app.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "15",
    name: "HD Webcam with Privacy Cover",
    price: 69.99,
    description:
      "Crystal-clear 1080p video calling with built-in dual microphones and physical privacy shutter.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "16",
    name: "Mechanical Numeric Keypad",
    price: 39.99,
    description:
      "Standalone wireless mechanical number pad for data entry and accounting efficiency.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "17",
    name: "RGB Gaming Mouse Pad",
    price: 29.99,
    description:
      "Extended micro-textured surface with customizable lighting zones for precision tracking.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "18",
    name: "Smart Security Indoor Camera",
    price: 59.99,
    description:
      "1080p security camera with night vision, motion tracking, and two-way audio communication.",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d7c3dcd?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "19",
    name: "Bluetooth Mechanical Keyboard",
    price: 109.99,
    description:
      "Multi-device pairing wireless mechanical keyboard with customizable hotkeys and aluminum chassis.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "20",
    name: "High-Capacity Power Bank 20000mAh",
    price: 49.99,
    description:
      "Charge your smartphone multiple times on the go with dual USB-C fast-charging ports.",
    image:
      "https://images.unsplash.com/photo-1609592424043-3e4757c9136e?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "21",
    name: "Smart Fitness Ring",
    price: 199.0,
    description:
      "Discreet titanium ring tracking sleep quality, body temperature, and daily physical activity.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
  },
  {
    id: "22",
    name: "Studio Monitor Headphones",
    price: 149.99,
    description:
      "Professional-grade acoustic performance designed for mixing, mastering, and critical listening.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
  },
  {
    id: "23",
    name: "Desk Pad Protector and Mouse Mat",
    price: 24.99,
    description:
      "Large waterproof PU leather desk mat that protects your workspace and eases mouse movement.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "24",
    name: "Smart Air Purifier",
    price: 129.99,
    description:
      "True HEPA filtration system removes allergens, dust, and odors from medium-sized rooms.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "25",
    name: "Dual Monitor Mount Stand",
    price: 79.99,
    description:
      "Fully adjustable gas spring arm desk mount supporting two screens up to 27 inches.",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80",
    category: "Displays",
  },
  {
    id: "26",
    name: "Compact Travel Earbuds Case",
    price: 14.99,
    description:
      "Shockproof silicone protective case with carabiner for secure travel and everyday carry.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Audio",
  },
  {
    id: "27",
    name: "Smart LED Light Strip 5m",
    price: 32.99,
    description:
      "App-controlled color-changing RGB lights with music synchronization and voice integration.",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf39f574?w=500&q=80",
    category: "Lighting",
  },
  {
    id: "28",
    name: "Ergonomic Footrest Under Desk",
    price: 36.99,
    description:
      "Rocking foam footrest to enhance circulation and relieve leg fatigue during desk work.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "29",
    name: "Thunderbolt 4 Docking Station",
    price: 229.99,
    description:
      "Ultimate expansion hub featuring dual 4K display outputs, 85W power delivery, and ultra-fast ports.",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "30",
    name: "USB Condenser Microphone",
    price: 89.99,
    description:
      "Studio-quality audio recording for streaming, podcasts, and voiceovers with zero-latency monitoring.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Audio",
  },
  {
    id: "31",
    name: "Smart Video Doorbell",
    price: 159.99,
    description:
      "1080p HD video with two-way talk, advanced motion detection, and easy smartphone alerts.",
    image:
      "https://images.unsplash.com/photo-1557324232-b8917d7c3dcd?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "32",
    name: "Vertical Laptop Stand Holder",
    price: 27.99,
    description:
      "Adjustable dual-slot space-saving aluminum dock to keep your desk clean and organized.",
    image:
      "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "33",
    name: "Rechargeable LED Screen Bar Light",
    price: 45.99,
    description:
      "Monitors light bar with adjustable color temperature to eliminate screen glare and reduce eye strain.",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf39f574?w=500&q=80",
    category: "Lighting",
  },
  {
    id: "34",
    name: "Smart Wi-Fi Thermostat",
    price: 129.0,
    description:
      "Programmable energy-saving thermostat that learns your schedule and optimizes home comfort.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "35",
    name: "Magnetic Privacy Screen Filter",
    price: 39.99,
    description:
      "Removable anti-glare screen protector that safeguards sensitive data from visual hacking.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    category: "Displays",
  },
  {
    id: "36",
    name: "Wireless Presentation Clicker",
    price: 24.99,
    description:
      "Ergonomic slide presenter with built-in laser pointer and long-range wireless connectivity.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "37",
    name: "Smart Robotic Vacuum Cleaner",
    price: 279.99,
    description:
      "Automatic floor cleaning with mapping technology, strong suction power, and app scheduling.",
    image:
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "38",
    name: "Bluetooth Sports Earphones",
    price: 49.99,
    description:
      "Secure earhook design with sweat-resistant build and punchy bass for intense workouts.",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    category: "Audio",
  },
  {
    id: "39",
    name: 'External Hard Drive Enclosure 2.5"',
    price: 15.99,
    description:
      "Tool-free USB 3.0 SATA enclosure to turn your old internal drive into portable storage.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
    category: "Storage",
  },
  {
    id: "40",
    name: "Smart Body Composition Scale",
    price: 39.99,
    description:
      "Measures weight, body fat, muscle mass, and other metrics synced directly to health apps.",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Wearables",
  },
  {
    id: "41",
    name: "Portable Mini Projector",
    price: 179.99,
    description:
      "Pocket-sized projector with HD resolution and wireless screen mirroring for movie nights anywhere.",
    image:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    category: "Displays",
  },
  {
    id: "42",
    name: "Multi-Device Bluetooth Trackball Mouse",
    price: 54.99,
    description:
      "Comfortable trackball navigation designed to minimize arm movement across multi-screen setups.",
    image:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "43",
    name: "Smart Garage Door Opener",
    price: 49.99,
    description:
      "Monitor and control your garage door remotely with smartphone alerts and automated closing.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "44",
    name: "Ergonomic Memory Foam Seat Cushion",
    price: 32.99,
    description:
      "Relieves tailbone pressure and promotes healthy posture during long hours of office sitting.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "45",
    name: "Active Noise-Canceling Neckband Earphones",
    price: 89.99,
    description:
      "Secure flexible neckband style with long battery life and crystal-clear microphone clarity.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
  },
  {
    id: "46",
    name: "Smart Color LED Bulb",
    price: 19.99,
    description:
      "Dimmable color-changing smart bulb compatible with major voice assistants without a hub.",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf39f574?w=500&q=80",
    category: "Lighting",
  },
  {
    id: "47",
    name: "Desktop Cable Management Box",
    price: 18.99,
    description:
      "Hide messy power strips and tangled cords cleanly away from children, pets, and view.",
    image:
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80",
    category: "Accessories",
  },
  {
    id: "48",
    name: "Wireless Gaming Headset",
    price: 129.99,
    description:
      "Immersive surround sound, ultra-low latency connection, and plush breathable ear cushions.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Audio",
  },
  {
    id: "49",
    name: "Smart Water Leak Detector",
    price: 29.99,
    description:
      "Instant smartphone alerts and audible alarms when moisture is detected near sensitive appliances.",
    image:
      "https://images.unsplash.com/photo-1558089687-f282ffcbc126?w=500&q=80",
    category: "Smart Home",
  },
  {
    id: "50",
    name: "Portable Solid State Drive 2TB",
    price: 199.99,
    description:
      "Massive capacity and blazing-fast transfer speeds encased in a shock-resistant design.",
    image:
      "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80",
    category: "Storage",
  },
];

/**
 * Simulates fetching products from a remote API with latency and optional error simulation.
 */
export const fetchProducts = async (shouldFail = false): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(
          new Error("Failed to fetch products from server. Please try again."),
        );
      } else {
        resolve(MOCK_PRODUCTS);
      }
    }, 1000); // 1 second network delay
  });
};

/**
 * Simulates fetching a single product by ID.
 */
export const fetchProductById = async (
  id: string,
): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = MOCK_PRODUCTS.find((p) => p.id === id);
      resolve(product);
    }, 500);
  });
};
