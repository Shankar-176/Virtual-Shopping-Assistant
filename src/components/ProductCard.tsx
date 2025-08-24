import React from 'react';
import { Star, ShoppingCart, ExternalLink, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const handleViewProduct = () => {
    // Open the actual product URL from Amazon/Flipkart
    window.open(product.productUrl, '_blank');
  };

  const handleAddToCart = () => {
    // Open the actual product URL for purchase
    window.open(product.productUrl, '_blank');
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group cursor-pointer">
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-slate-100" onClick={handleViewProduct}>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Store Badge */}
        <div className="flex items-center justify-between mb-2">
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
            product.store === 'Amazon' 
              ? 'bg-orange-100 text-orange-800' 
              : 'bg-blue-100 text-blue-800'
          }`}>
            {product.store}
          </span>
          {product.rating && (
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs text-slate-600">{product.rating}</span>
            </div>
          )}
        </div>

        <div className="flex items-start justify-between mb-2">
          <h3 
            className="font-semibold text-slate-900 text-sm leading-tight line-clamp-2 cursor-pointer hover:text-blue-600 transition-colors flex-1"
            onClick={handleViewProduct}
          >
            {product.name}
          </h3>
        </div>

        <p className="text-xs text-slate-600 mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-slate-900">
            ${product.price}
            {product.originalPrice && (
              <span className="text-sm text-slate-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex space-x-2">
            <button 
              onClick={handleAddToCart}
              className={`p-2 text-white rounded-lg transition-colors duration-200 flex items-center justify-center ${
                product.store === 'Amazon' 
                  ? 'bg-orange-500 hover:bg-orange-600' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
              title={`Buy on ${product.store}`}
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button 
              onClick={handleViewProduct}
              className="p-2 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors duration-200 flex items-center justify-center"
              title="View on Store"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        </div>

        {product.features && product.features.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {product.features.slice(0, 2).map((feature, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;