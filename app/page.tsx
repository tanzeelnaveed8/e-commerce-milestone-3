'use client';

import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useProducts } from './hooks/useProducts';
import { useCart } from './hooks/useCart';
import { useState } from 'react';

export default function Home() {
  const { products, loading } = useProducts();
  const cart = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Cart
            items={cart.items}
            onUpdateQuantity={cart.updateQuantity}
            onRemoveItem={cart.removeItem}
          />
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[400px] bg-muted animate-pulse rounded-lg"
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={cart.addItem}
            />
          ))}
        </div>
      )}
    </div>
  );
}