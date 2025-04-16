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
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [isClient, setIsClient] = useState(false); // Add client-side detection

  useEffect(() => {
    setIsClient(true); // Mark as client-side rendered
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Only render animations after client-side hydration
  const shouldAnimate = isClient && !isLoading;

  return (
    <main className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative text-center py-20 px-6 bg-cover bg-center">
        {/* Background layer */}
        <div className="absolute inset-0 bg-white z-0" />

        {/* Foreground content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {shouldAnimate ? (
            <>
              <motion.h1 
                className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                Explore Our Product Range
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-gray-500 font-light"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                High-performance automation gear engineered for precision, power, and durability.
              </motion.p>
            </>
          ) : (
            <>
              <p>
              </p>
            </>
          )}
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {isLoading ? (
            // Skeleton loader
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-3xl mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
              </div>
            ))
          ) : (
            <AnimatePresence>
              {products.map((product) => {
                const slug = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

                return (
                  <motion.div
                    key={product.id}
                    layoutId={`main-product-${slug}`}
                    initial={shouldAnimate ? { opacity: 0, y: 20 } : false}
                    animate={shouldAnimate ? { opacity: 1, y: 0 } : false}
                    transition={{ delay: 1, duration: 0.5 }}
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
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
