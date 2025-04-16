'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
  description: string;
  imageUrl?: string;
  subProducts?: SubProduct[];
}

export default function ProductPage() {
  const { slug } = useParams() as { slug: string };
  const [product, setProduct] = useState<Product | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const snapshot = await getDocs(collection(db, 'products'));
        const allProducts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Product[];
        
        console.log('Searching for slug:', slug);
        console.log('Available products:', allProducts);
        
        const match = allProducts.find(p => p.slug === slug);
        
        console.log('Matched product:', match);
        
        if (match) {
          setProduct(match);
        } else {
          console.log('No product found for slug:', slug);
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

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

  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="text-center text-red-500 py-10">{error}</div>
      </main>
    );
  }

  if (!product) return notFound();
  const subProducts = product.subProducts ?? [];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      <div className="max-w-4xl mx-auto text-center px-6 py-16">
        <motion.div
          layoutId={`card-${product.slug}`}
          layout="position"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="flex flex-col items-center"
        >
          {product.imageUrl && (
            <motion.img
              layoutId={`image-${product.slug}`}
              transition={{ type: 'spring', stiffness: 150, damping: 15 }}
              src={product.imageUrl}
              alt={product.name}
              className="h-64 w-auto object-contain mb-8"
            />
          )}
        </motion.div>

        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        <motion.p
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
        >
          {product.description}
        </motion.p>

        {subProducts.length > 0 && (
          <section className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {subProducts.map((sub, index) => (
                <Link
                  key={index}
                  href={`/products/${product.slug}/${sub.slug}`}
                  onClick={() => setSelected(sub.slug)}
                  className={`group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50 ${
                    selected && selected !== sub.slug ? 'opacity-20 scale-95' : 'opacity-100'
                  }`}
                >
                  {sub.image && (
                    <img
                      src={sub.image}
                      alt={sub.name}
                      className="mx-auto h-24 w-auto mb-3 object-contain"
                    />
                  )}
                  <motion.p className="text-lg font-semibold text-black tracking-tight">
                    {sub.name}
                  </motion.p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </main>
  );
}
