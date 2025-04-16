// src/app/page.tsx or wherever your main products page is
'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getProducts, Product } from '@/lib/getProducts';
import Image from 'next/image';

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <motion.section 
        className="relative text-center py-20 px-6 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-white z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Explore Our Product Range
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-500 font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            High-performance automation gear engineered for precision, power, and durability.
          </motion.p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <AnimatePresence>
            {products.map((product) => {
              const slug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

              return (
                <motion.div
                  key={product.id}
                  layoutId={`main-product-${slug}`}
                  className={`${
                    selected && selected !== slug ? 'opacity-0 scale-95' : 'opacity-100'
                  }`}
                >
                  <Link
                    href={`/products/${slug}`}
                    onClick={() => setSelected(slug)}
                    className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50"
                  >
                    {product.imageUrl && (
                      <motion.div
                        layoutId={`main-image-${slug}`}
                        className="relative aspect-square h-50 w-full mb-4"
                      >
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </motion.div>
                    )}
                    <motion.p 
                      layoutId={`main-title-${slug}`}
                      className="text-lg font-semibold text-black tracking-tight"
                    >
                      {product.name}
                    </motion.p>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}
