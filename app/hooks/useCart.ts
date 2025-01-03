'use client';

import { useState } from 'react';
import { Product } from '../types';

export interface CartItem extends Product {
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: number, change: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  return {
    items,
    addItem,
    updateQuantity,
    removeItem,
  };
}