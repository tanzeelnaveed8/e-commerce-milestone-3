import { getProduct } from '@/app/lib/api'; // Ensure getProduct is correctly imported
import ProductDetails from '@/app/components/ProductDetails';

// Static Params Generation
export async function generateStaticParams() {
  return Array.from({ length: 20 }, (_, i) => ({
    id: String(i + 1),
  }));
}

export default async function ProductPage({ params }) {
  try {
    // Fetch product data based on params.id
    const product = await getProduct(params.id);
    
    // Return the ProductDetails component with fetched data
    return <ProductDetails initialProduct={product} />;
  } catch (error) {
    // Handle error case if the product is not found
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">Product not found</p>
      </div>
    );
  }
}
