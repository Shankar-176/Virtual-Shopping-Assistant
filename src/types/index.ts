export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  features?: string[];
  rating?: number;
  tags: string[];
  store: 'Amazon' | 'Flipkart';
  productUrl: string;
}

export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  products?: Product[];
}

export interface ChatResponse {
  message: string;
  products?: Product[];
}