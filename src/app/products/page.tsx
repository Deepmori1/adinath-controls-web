'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { getProducts, Product } from '@/lib/getProducts';

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
      <section className="relative text-center py-20 px-6 bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-white-950/90 to-white-900/90 z-0" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight">
            Explore Our Product Range
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-light">
            High-performance automation gear engineered for precision, power, and durability.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => {
          const slug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

          return (
            <Link
              key={product.id}
              href={`/products/${slug}`}
              onClick={() => setSelected(slug)}
            >
              <motion.div
                layoutId={`card-${slug}`}
                layout="position"
                className={`group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50 ${
                  selected && selected !== slug ? 'opacity-20 scale-95' : 'opacity-100'
                }`}
              >
                {product.imageUrl && (
                  <motion.img
                    layoutId={`image-${slug}`}
                    src={product.imageUrl}
                    alt={product.name}
                    className="h-48 w-auto object-contain mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <motion.p className="text-lg font-semibold text-black tracking-tight">
                  {product.name}
                </motion.p>
              </motion.div>
            </Link>
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
