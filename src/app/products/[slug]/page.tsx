// src/app/products/[slug]/page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface PDF {
  name: string;
  file: string;
}

interface SubProduct {
  name: string;
  slug: string;
  image?: string;
}

interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  subProducts?: SubProduct[];
  pdfs?: PDF[]
}

// 🔁 A fallback skeleton shown while loading the product
const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-4 bg-gray-200 rounded-lg" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
  </div>
);

export default function ProductPage() {
  const { slug } = useParams() as { slug: string }; // Grab the product slug from the URL
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null); // Tracks which subproduct is selected
  

   // Fetch data using React Query, cache it by ['product', slug]
  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, 'products')); // Fetch entire 'products' collection
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, 'id'>)
      })) as Product[];
      
      return products.find(p => p.slug === slug); // Find the product matching the URL slug
    },
  });

  // While the product data is being loaded, show the skeleton UI
  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16">
          <ProductSkeleton />
        </div>
        <Footer />
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-red-500">Error loading product</div>
        </div>
        <Footer />
      </main>
    );
  }

  // If product not found, return nothing (or optionally a 404 later)
  if (!product) return null;

  const productPdfs = product.pdfs ?? [];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">

        {/* Main Product Card with animation */}
        <motion.div
          layoutId={`main-product-${product?.slug}`} className="mb-12" >

          {/* 🖼 Product Image */}
          {product?.imageUrl && (
            <motion.div className="relative aspect-square w-full max-w-[350px] mx-auto mb-8">
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 350px"
              />
            </motion.div>
          )}

          {/* Product Name */}
          <motion.h1 className="text-4xl font-bold mb-4">{product?.name}</motion.h1>

          {/* Optional Product Description */}
          {product?.description && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              {product.description}
            </motion.p>
          )}
        </motion.div>
        
        {/* Logic for products if they dont have any subproducts */}
        {productPdfs.length > 0 && (
          <section className="mt-12 text-left">
            <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {productPdfs.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50"
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src="/Images/pdf-icon.png"
                      alt="PDF"
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <p className="text-lg">{doc.name}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        
        {/* SubProducts Grid */}
        {product?.subProducts && product.subProducts.length > 0 && (
          <motion.div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <AnimatePresence>
                {product.subProducts.map((subProduct) => (
                  <motion.div
                    key={subProduct.slug}
                    layoutId={`product-${product.slug}-${subProduct.slug}`}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`${
                      selectedProduct && selectedProduct !== subProduct.slug
                        ? 'opacity-0'
                        : 'opacity-100'
                    }`}
                  >
                    <Link
                      href={`/products/${slug}/${subProduct.slug}`}
                      onClick={() => setSelectedProduct(subProduct.slug)}
                      className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50"
                    >

                      {/* SubProduct Image */}
                      {subProduct.image && (
                        <motion.div
                          layoutId={`image-${product.slug}-${subProduct.slug}`}
                          className="relative aspect-square h-50 w-full mb-4"
                        >
                          <Image
                            src={subProduct.image}
                            alt={subProduct.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 200px"
                          />
                        </motion.div>
                      )}

                      {/* SubProduct Title */}
                      <motion.h3
                        layoutId={`title-${product.slug}-${subProduct.slug}`}
                        className="text-lg font-semibold"
                      >
                        {subProduct.name}
                      </motion.h3>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
      <Footer />
    </main>
  );
}
