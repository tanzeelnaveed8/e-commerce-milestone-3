'use client';

import { Product } from '../types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const router = useRouter();

  return (
    <Card className="flex flex-col h-full">
      <CardContent className="pt-4">
        <div className="aspect-square relative mb-4">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <h3 className="text-lg font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
          {product.description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="text-sm text-muted-foreground">
            Rating: {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </CardContent>
      <CardFooter className="mt-auto pt-4">
        <div className="flex gap-2 w-full">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push(`/products/${product.id}`)}
          >
            View Details
          </Button>
          <Button
            className="flex-1"
            onClick={() => onAddToCart(product)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}