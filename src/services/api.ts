import { Message, ChatResponse, Product } from '../types';
import { productCatalog } from '../data/products';

const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY'; // Replace with actual API key
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const SYSTEM_PROMPT = `You are ShopBot AI, an intelligent shopping assistant for an e-commerce platform. Your role is to help customers discover products that match their needs through natural conversation.

GUIDELINES:
- Be friendly, helpful, and conversational
- Ask clarifying questions to better understand customer needs
- Focus on the benefits and features that matter to the customer
- Recommend 2-4 relevant products when appropriate
- If unsure about requirements, ask follow-up questions
- Stay focused on product recommendations and shopping assistance
- Be enthusiastic about helping customers find perfect matches

PRODUCT MATCHING:
When recommending products, consider:
- Price range mentioned by customer
- Specific features or requirements
- Use case or intended purpose
- Style preferences
- Target recipient (if it's a gift)

Always provide helpful, accurate information and guide customers toward products that truly meet their needs.`;

class ChatAPIService {
  private async callGeminiAPI(messages: Message[], userInput: string): Promise<string> {
    // For development without API key, return mock responses
    if (!GEMINI_API_KEY || GEMINI_API_KEY === 'YOUR_GEMINI_API_KEY') {
      return this.getMockResponse(userInput);
    }

    try {
      const conversationHistory = messages.slice(-6).map(msg => 
        `${msg.sender === 'user' ? 'Customer' : 'Assistant'}: ${msg.text}`
      ).join('\n');

      const prompt = `${SYSTEM_PROMPT}\n\nConversation History:\n${conversationHistory}\n\nCustomer: ${userInput}\n\nAssistant:`;

      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 500,
          }
        })
      });

      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I'd be happy to help you find products!";
    } catch (error) {
      console.error('Gemini API error:', error);
      return this.getMockResponse(userInput);
    }
  }

  private getMockResponse(userInput: string): string {
    const input = userInput.toLowerCase();
    
    if (input.includes('gift') && input.includes('mom') && input.includes('garden')) {
      return "That's so thoughtful! For a mom who loves gardening, I have some perfect recommendations from Amazon and Flipkart. Here are some beautiful options that any gardening enthusiast would love:";
    }
    
    if (input.includes('backpack') && input.includes('waterproof')) {
      return "Great choice! A waterproof backpack is essential for outdoor activities. I've found some excellent options from Amazon and Flipkart that combine durability, water resistance, and functionality:";
    }
    
    if (input.includes('headphones') && input.includes('workout')) {
      return "Perfect for staying motivated during workouts! Here are some top-rated wireless headphones from Amazon and Flipkart designed specifically for fitness enthusiasts:";
    }
    
    if (input.includes('home decor') && input.includes('50')) {
      return "I love helping with home decor! Here are some trendy and affordable pieces from Amazon and Flipkart that will refresh your space without breaking the budget:";
    }

    if (input.includes('hello') || input.includes('hi')) {
      return "Hello! I'm excited to help you find the perfect products today. What are you looking for?";
    }

    // More contextual responses based on user input
    if (input.includes('buy') || input.includes('purchase') || input.includes('order')) {
      return "Great! I can help you find products to purchase from Amazon and Flipkart. Just click on any product I recommend to view it on the store and buy it directly. What type of product are you looking to buy?";
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('budget')) {
      return "I'll help you find products within your budget from Amazon and Flipkart! What's your price range, and what type of product are you looking for?";
    }
    
    return "I'd love to help you find exactly what you're looking for from Amazon and Flipkart! Could you tell me a bit more about what you have in mind? For example, what's your budget range, and are there any specific features that are important to you? You can click on any product I recommend to view it on the store and make a purchase directly.";
  }

  private findRelevantProducts(userInput: string, responseText: string): Product[] {
    const input = userInput.toLowerCase();
    const relevantProducts: Product[] = [];
    
    // Garden/Mom gift products
    if ((input.includes('gift') && input.includes('mom') && input.includes('garden')) || 
        input.includes('gardening') || input.includes('plant')) {
      relevantProducts.push(
        ...productCatalog.filter(p => p.category === 'Garden' || p.tags.some(tag => 
          ['garden', 'plant', 'organic', 'outdoor'].includes(tag.toLowerCase())
        )).slice(0, 3)
      );
    }
    
    // Backpack products
    else if (input.includes('backpack') || input.includes('bag')) {
      relevantProducts.push(
        ...productCatalog.filter(p => p.category === 'Bags' || p.tags.some(tag => 
          ['waterproof', 'laptop', 'travel', 'outdoor'].includes(tag.toLowerCase())
        )).slice(0, 3)
      );
    }
    
    // Headphones products
    else if (input.includes('headphones') || input.includes('audio') || input.includes('music')) {
      relevantProducts.push(
        ...productCatalog.filter(p => p.category === 'Electronics' || p.tags.some(tag => 
          ['wireless', 'fitness', 'audio', 'bluetooth'].includes(tag.toLowerCase())
        )).slice(0, 3)
      );
    }
    
    // Home decor products
    else if (input.includes('home') || input.includes('decor') || input.includes('decoration')) {
      const budget = input.includes('50') ? 50 : 100;
      relevantProducts.push(
        ...productCatalog.filter(p => 
          (p.category === 'Home' || p.tags.some(tag => 
            ['home', 'decor', 'decoration', 'modern'].includes(tag.toLowerCase())
          )) && p.price <= budget
        ).slice(0, 4)
      );
    }
    
    // General search if no specific category matched
    if (relevantProducts.length === 0) {
      const searchTerms = input.split(' ').filter(term => term.length > 2);
      relevantProducts.push(
        ...productCatalog.filter(p => 
          searchTerms.some(term => 
            p.name.toLowerCase().includes(term) ||
            p.description.toLowerCase().includes(term) ||
            p.tags.some(tag => tag.toLowerCase().includes(term))
          )
        ).slice(0, 3)
      );
    }

    return relevantProducts;
  }

  async sendMessage(userInput: string, conversationHistory: Message[]): Promise<ChatResponse> {
    const aiResponse = await this.callGeminiAPI(conversationHistory, userInput);
    const products = this.findRelevantProducts(userInput, aiResponse);
    
    return {
      message: aiResponse,
      products: products.length > 0 ? products : undefined
    };
  }
}

export const chatAPI = new ChatAPIService();