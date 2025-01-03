'use client';

import { useState } from 'react';
import { Product } from '@/app/types';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductDetailsProps {
  initialProduct: Product;
}

export default function ProductDetails({ initialProduct }: ProductDetailsProps) {
  const [product] = useState<Product>(initialProduct);
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Button>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold">${product.price}</span>
            <div className="text-sm text-muted-foreground">
              Rating: {product.rating.rate} ({product.rating.count} reviews)
            </div>
          </div>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          <Button className="w-full" size="lg">
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}