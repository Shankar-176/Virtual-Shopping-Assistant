import { Product } from '../types';

export const productCatalog: Product[] = [
  // Garden Products - Amazon
  {
    id: 'amazon-garden-001',
    name: 'Ugaoo Organic Vegetable Seeds Kit',
    description: 'Premium organic vegetable seeds kit with 15 varieties including tomato, spinach, coriander, and more. Perfect for home gardening enthusiasts.',
    price: 299,
    originalPrice: 499,
    image: 'https://images.pexels.com/photos/4750274/pexels-photo-4750274.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Garden',
    features: ['15 Seed Varieties', 'Organic Certified', 'High Germination Rate', 'Growing Instructions'],
    rating: 4.3,
    tags: ['garden', 'organic', 'seeds', 'vegetables', 'gift', 'beginner'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B08XYZKQM7'
  },
  {
    id: 'flipkart-garden-001',
    name: 'Trust Basket Gardening Tools Set',
    description: 'Complete 6-piece gardening tool set with ergonomic handles. Includes hand trowel, weeder, cultivator, and more essential tools.',
    price: 449,
    originalPrice: 799,
    image: 'https://images.pexels.com/photos/4505147/pexels-photo-4505147.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Garden',
    features: ['6-Piece Set', 'Ergonomic Handles', 'Rust Resistant', 'Compact Storage'],
    rating: 4.2,
    tags: ['garden', 'tools', 'ergonomic', 'professional', 'gift', 'quality'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/trust-basket-gardening-tools-set/p/itmf8gzqhzqzqzqz'
  },
  {
    id: 'amazon-garden-002',
    name: 'Kraft Seeds Herb Garden Kit',
    description: 'Indoor herb garden kit with basil, mint, coriander, and parsley seeds. Includes biodegradable pots and organic potting mix.',
    price: 399,
    image: 'https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Garden',
    features: ['4 Herb Varieties', 'Indoor Growing', 'Biodegradable Pots', 'Organic Mix'],
    rating: 4.5,
    tags: ['garden', 'herbs', 'indoor', 'organic', 'kitchen', 'fresh'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B07XYZABC1'
  },

  // Backpack Products - Amazon & Flipkart
  {
    id: 'amazon-bag-001',
    name: 'American Tourister Waterproof Laptop Backpack',
    description: 'Premium waterproof laptop backpack with 15.6" laptop compartment, USB charging port, and anti-theft design. Perfect for professionals.',
    price: 1899,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bags',
    features: ['Waterproof', '15.6" Laptop Compartment', 'USB Charging Port', 'Anti-Theft'],
    rating: 4.4,
    tags: ['backpack', 'waterproof', 'laptop', 'travel', 'professional', 'business'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B08XYZDEF2'
  },
  {
    id: 'flipkart-bag-001',
    name: 'Wildcraft Hiking Backpack 35L',
    description: 'Lightweight 35L hiking backpack with rain cover, multiple compartments, and breathable back panel. Ideal for trekking and outdoor adventures.',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/1450114/pexels-photo-1450114.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bags',
    features: ['35L Capacity', 'Rain Cover', 'Lightweight', 'Breathable Panel'],
    rating: 4.6,
    tags: ['backpack', 'hiking', 'outdoor', 'waterproof', 'lightweight', 'adventure'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/wildcraft-hiking-backpack/p/itmfghijk123'
  },
  {
    id: 'amazon-bag-002',
    name: 'VIP Commuter Smart Backpack',
    description: 'Smart urban backpack with built-in power bank compartment, RFID blocking pocket, and sleek design for daily commuting.',
    price: 2799,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Bags',
    features: ['Power Bank Compartment', 'RFID Blocking', 'Urban Design', 'Multiple Pockets'],
    rating: 4.3,
    tags: ['backpack', 'smart', 'tech', 'urban', 'commuter', 'modern'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B09ABCDEF3'
  },

  // Headphones Products - Amazon & Flipkart
  {
    id: 'amazon-audio-001',
    name: 'boAt Airdopes 141 Wireless Earbuds',
    description: 'True wireless earbuds with 42H playback, IPX4 water resistance, and secure fit for workouts. Perfect for fitness enthusiasts.',
    price: 1499,
    originalPrice: 2990,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    features: ['42H Playback', 'IPX4 Water Resistant', 'Secure Fit', 'Fast Charging'],
    rating: 4.2,
    tags: ['headphones', 'wireless', 'fitness', 'water-resistant', 'earbuds', 'workout'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B08GHIJK45'
  },
  {
    id: 'flipkart-audio-001',
    name: 'Sony WH-CH720N Noise Cancelling Headphones',
    description: 'Premium over-ear headphones with active noise cancellation, 35-hour battery life, and superior sound quality for music lovers.',
    price: 8990,
    originalPrice: 12990,
    image: 'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    features: ['Active Noise Cancellation', '35-Hour Battery', 'Premium Sound', 'Comfortable Fit'],
    rating: 4.7,
    tags: ['headphones', 'noise-cancelling', 'premium', 'sony', 'wireless', 'long-battery'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/sony-wh-ch720n/p/itm456789abc'
  },
  {
    id: 'amazon-audio-002',
    name: 'JBL Endurance Peak 3 Sports Earbuds',
    description: 'Waterproof sports earbuds with ear hooks, 50-hour total playback, and powerful JBL sound designed for intense workouts.',
    price: 4999,
    originalPrice: 7999,
    image: 'https://images.pexels.com/photos/3394652/pexels-photo-3394652.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    features: ['Waterproof Design', 'Ear Hooks', '50H Total Playback', 'JBL Sound'],
    rating: 4.5,
    tags: ['headphones', 'sports', 'waterproof', 'jbl', 'ear-hooks', 'workout'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B09LMNOP67'
  },

  // Home Decor Products - Amazon & Flipkart
  {
    id: 'flipkart-home-001',
    name: 'Home Centre Modern Wall Art Set',
    description: 'Contemporary set of 3 framed geometric prints perfect for modern living spaces. High-quality MDF frames with glass protection.',
    price: 1299,
    originalPrice: 2499,
    image: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    features: ['3-Piece Set', 'MDF Frames', 'Glass Protection', 'Ready to Hang'],
    rating: 4.3,
    tags: ['home', 'decor', 'wall-art', 'modern', 'geometric', 'affordable'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/home-centre-wall-art/p/itmqrstuv123'
  },
  {
    id: 'amazon-home-001',
    name: 'Philips LED Table Lamp',
    description: 'Elegant ceramic table lamp with warm LED bulb and touch dimmer control. Energy-efficient and perfect for bedrooms.',
    price: 1899,
    originalPrice: 2999,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    features: ['Ceramic Base', 'Touch Dimmer', 'LED Bulb', 'Energy Efficient'],
    rating: 4.6,
    tags: ['home', 'decor', 'lamp', 'led', 'lighting', 'ceramic', 'modern'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B08WXYZ123'
  },
  {
    id: 'flipkart-home-002',
    name: 'Urban Ladder Cushion Covers Set',
    description: 'Set of 4 decorative cushion covers with beautiful bohemian patterns. Premium cotton fabric with hidden zippers.',
    price: 799,
    originalPrice: 1599,
    image: 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    features: ['4-Piece Set', 'Cotton Fabric', 'Bohemian Design', 'Hidden Zippers'],
    rating: 4.4,
    tags: ['home', 'decor', 'cushions', 'bohemian', 'colorful', 'affordable'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/urban-ladder-cushions/p/itmabcdef456'
  },
  {
    id: 'amazon-home-002',
    name: 'IKEA Style Storage Box',
    description: 'Minimalist wooden storage box with clean lines and natural finish. Perfect for organizing books, toys, or accessories.',
    price: 1499,
    image: 'https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    features: ['Natural Wood', 'Minimalist Design', 'Multi-Purpose', 'Durable Construction'],
    rating: 4.5,
    tags: ['home', 'decor', 'storage', 'minimalist', 'wooden', 'organization'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B09GHIJK78'
  },

  // Additional Tech Products
  {
    id: 'amazon-tech-001',
    name: 'Mi 360° Home Security Camera',
    description: 'Smart WiFi security camera with 1080p resolution, night vision, motion detection, and smartphone app control.',
    price: 2499,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/2228559/pexels-photo-2228559.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Electronics',
    features: ['1080p Resolution', 'Night Vision', 'Motion Detection', 'WiFi Connected'],
    rating: 4.3,
    tags: ['tech', 'security', 'camera', 'smart-home', 'wifi', 'surveillance'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B08LMNOP90'
  },
  {
    id: 'flipkart-kitchen-001',
    name: 'Prestige Electric Coffee Maker',
    description: 'Programmable drip coffee maker with thermal carafe, auto shut-off, and brew strength control. Makes perfect coffee every time.',
    price: 3499,
    originalPrice: 4999,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen',
    features: ['Programmable', 'Thermal Carafe', 'Auto Shut-off', 'Brew Control'],
    rating: 4.4,
    tags: ['kitchen', 'coffee', 'appliance', 'programmable', 'prestige'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/prestige-coffee-maker/p/itmqrstuv789'
  },

  // Fashion & Lifestyle
  {
    id: 'amazon-fashion-001',
    name: 'Levi\'s Men\'s Regular Fit Jeans',
    description: 'Classic regular fit jeans in dark blue wash. Premium denim with comfortable fit and timeless style.',
    price: 2199,
    originalPrice: 3999,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    features: ['Regular Fit', 'Premium Denim', 'Dark Blue Wash', 'Classic Style'],
    rating: 4.5,
    tags: ['fashion', 'jeans', 'men', 'levis', 'denim', 'casual'],
    store: 'Amazon',
    productUrl: 'https://www.amazon.in/dp/B07ABCDEF1'
  },
  {
    id: 'flipkart-fashion-001',
    name: 'Nike Air Max Sneakers',
    description: 'Comfortable running sneakers with Air Max cushioning technology. Perfect for daily wear and light workouts.',
    price: 4999,
    originalPrice: 7995,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    features: ['Air Max Technology', 'Comfortable Fit', 'Durable Design', 'Versatile Style'],
    rating: 4.6,
    tags: ['fashion', 'shoes', 'nike', 'sneakers', 'running', 'comfortable'],
    store: 'Flipkart',
    productUrl: 'https://www.flipkart.com/nike-air-max/p/itmxyzabc123'
  }
];