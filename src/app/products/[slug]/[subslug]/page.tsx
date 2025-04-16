'use client';

import { useParams, notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


interface PDF {
  name: string;
  file: string;
}

interface SubProduct {
  name: string;
  slug: string;
  image?: string;
  pdfs?: PDF[];
}

interface Product {
  id: string;
  name: string;
  slug: string;
  subProducts?: SubProduct[];
}

export default function SubProductPage() {
  const { slug, subslug } = useParams() as { slug: string; subslug: string };
  const [subProduct, setSubProduct] = useState<SubProduct | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubProduct = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching with slug:', slug, 'and subslug:', subslug);

        const snapshot = await getDocs(collection(db, 'products'));
        const allProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Product, 'id'>)
        })) as Product[];

        console.log('All products:', allProducts);

        const product = allProducts.find(p => {
          console.log('Comparing product slug:', p.slug, 'with:', slug);
          return p.slug === slug;
        });

        console.log('Found product:', product);

        if (!product) {
          console.log('No product found for slug:', slug);
          setError(`No product found for ${slug}`);
          return;
        }

        if (!product.subProducts) {
          console.log('No subProducts found for product:', product.name);
          setError(`No sub-products found for ${product.name}`);
          return;
        }

        const match = product.subProducts.find(sp => {
          console.log('Comparing subproduct slug:', sp.slug, 'with:', subslug);
          return sp.slug === subslug;
        });

        console.log('Matched subProduct:', match);

        if (match) {
          setSubProduct(match);
        } else {
          setError(`No sub-product found for ${subslug}`);
        }
      } catch (err) {
        console.error('Error fetching sub-product:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch sub-product');
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubProduct();
  }, [slug, subslug]);

  // Loading State
  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
        </div>
      </main>
    );
  }

  // Error State
  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-red-500 mb-4">Error: {error}</div>
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </main>
    );
  }

  if (!subProduct) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        {subProduct.image && (
          <img
            src={subProduct.image}
            alt={subProduct.name}
            className="h-48 w-auto mx-auto mb-8 object-contain"
          />
        )}
        <h1 className="text-4xl font-bold mb-4">{subProduct.name}</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed view of {subProduct.name}
        </p>

        {/* Downloads Section */}
        {subProduct.pdfs && subProduct.pdfs.length > 0 && (
          <div className="mt-12 text-left">
            <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {subProduct.pdfs.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 bg-white rounded-lg shadow hover:shadow-md hover:scale-105 transition-transform border border-gray-200 text-center"
                >
                  <img
                    src="/Images/pdf-icon.png"
                    alt="PDF"
                    className="h-16 mx-auto mb-3"
                  />
                  <p className="text-blue-700 font-medium">{doc.name}</p>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
