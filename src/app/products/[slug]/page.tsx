"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { products } from '@/data/products';
import { motion } from 'framer-motion';

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = products.find((p) => p.slug === slug);

  if (!slug || !product) {
    return <div className="text-center py-20">Product not found.</div>;
  }

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
          <motion.img
            layoutId={`image-${product.slug}`}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
            src={product.image}
            alt={product.name}
            className="h-64 w-auto object-contain mb-8"
          />
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

      </div>

      <Footer />
    </main>
  );
}
