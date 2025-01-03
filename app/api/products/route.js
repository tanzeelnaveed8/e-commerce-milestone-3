import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";  // Ensure this forces dynamic behavior

export async function GET(request) {
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop(); // Extracts 'id' from URL

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    
    const product = await res.json();
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}
