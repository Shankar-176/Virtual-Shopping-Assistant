import React from 'react';
import { MessageCircle, Sparkles, ShoppingBag, Search } from 'lucide-react';
import { useChat } from '../context/ChatContext';

const WelcomeScreen: React.FC = () => {
  const { sendMessage } = useChat();

  const exampleQueries = [
    "I need a gift for my mom who loves gardening",
    "Looking for a waterproof backpack with laptop compartment",
    "Show me trendy home decor items under $50",
    "I want wireless headphones for working out"
  ];

  const handleExampleClick = (query: string) => {
    sendMessage(query);
  };

  return (
    <div className="text-center py-8 animate-fadeIn">
      <div className="mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mb-4">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Welcome to ShopBot AI
        </h2>
        <p className="text-slate-600 max-w-md mx-auto">
          Your intelligent shopping assistant is here to help you discover products that perfectly match your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="flex flex-col items-center text-center p-4">
          <MessageCircle className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold text-slate-900 mb-1">Natural Conversation</h3>
          <p className="text-sm text-slate-600">Describe what you want in your own words</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <Search className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="font-semibold text-slate-900 mb-1">Smart Discovery</h3>
          <p className="text-sm text-slate-600">Get personalized product recommendations</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <ShoppingBag className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="font-semibold text-slate-900 mb-1">Perfect Matches</h3>
          <p className="text-sm text-slate-600">Find products that meet your exact needs</p>
        </div>
      </div>

      <div className="space-y-3">
        <p className="font-medium text-slate-700 mb-3">Try these examples:</p>
        {exampleQueries.map((query, index) => (
          <button
            key={index}
            onClick={() => handleExampleClick(query)}
            className="block w-full text-left p-3 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-lg transition-all duration-200 text-sm text-slate-700 hover:text-blue-700"
          >
            "{query}"
          </button>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;