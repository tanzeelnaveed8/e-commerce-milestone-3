import { NextResponse } from 'next/server';

export const dynamic = "force-dynamic";  // Forces dynamic handling for this route

export async function GET(request) {
  // Extract dynamic parameters from the URL
  const url = new URL(request.url);
  const id = url.pathname.split('/').pop();  // Extracts the 'id' from the URL path

  try {
    // Fetch product data based on the id
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product with id: ${id}`);
    }
    
    // Parse the product data
    const product = await res.json();
    
    // Return product data as JSON response
    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);

    // Handle error and return failure response
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
