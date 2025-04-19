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
import { useEffect, useState } from 'react';

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
  images?: string[];
  subProducts?: SubProduct[];
  pdfs?: PDF[];
}

const ProductSkeleton = () => (
  <div className="animate-pulse">
    <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-4 bg-gray-200 rounded-lg" />
    <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
    <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto" />
  </div>
);

export default function ProductPage() {
  const { slug } = useParams() as { slug: string };
  //const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ['product', slug],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, 'id'>)
      })) as Product[];

      return products.find(p => p.slug === slug);
    },
  });

  useEffect(() => {
    if (product?.images && product.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % product.images!.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [product]);

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

  if (!product) return null;

  const productPdfs = product.pdfs ?? [];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div layoutId={`main-product-${product?.slug}`} className="mb-12">

          {/* Product Image Slider */}
          {product?.images && product.images.length > 0 ? (
            <div className="relative aspect-square w-full max-w-[350px] mx-auto mb-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.images[currentImageIndex]}
                  className="absolute inset-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <Image
                    src={product.images[currentImageIndex]}
                    alt={`${product.name} ${currentImageIndex + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 350px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          ) : product?.imageUrl && (
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

          <motion.h1 className="text-4xl font-bold mb-4">{product?.name}</motion.h1>

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

        {/* Downloads */}
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

        {/* SubProducts */}
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
                    className="opacity-100"
                  >
                    <Link
                      href={`/products/${slug}/${subProduct.slug}`}
                      onClick={() => setSelectedProduct(subProduct.slug)}
                      className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50"
                    >
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
