import React from 'react';
import { Bot, User } from 'lucide-react';
import { Message as MessageType } from '../types';
import ProductCard from './ProductCard';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} animate-fadeIn`}>
      <div className={`flex items-start space-x-3 max-w-3xl ${isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'}`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
          isBot 
            ? 'bg-blue-600 text-white' 
            : 'bg-slate-600 text-white'
        }`}>
          {isBot ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
        </div>

        {/* Message Content */}
        <div className={`flex flex-col space-y-3 ${isBot ? 'items-start' : 'items-end'}`}>
          <div className={`px-4 py-3 rounded-2xl max-w-md ${
            isBot 
              ? 'bg-slate-100 text-slate-900 rounded-bl-sm' 
              : 'bg-blue-600 text-white rounded-br-sm'
          } shadow-sm`}>
            <p className="text-sm leading-relaxed">{message.text}</p>
          </div>

          {/* Product Recommendations */}
          {message.products && message.products.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-2xl">
              {message.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;