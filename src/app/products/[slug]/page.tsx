"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();
  const subProducts = product.subProducts ?? [];

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

        {subProducts.length > 0 && (
          <section className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {subProducts.map((sub, index) => (
                <Link
                  key={index}
                  href={`/products/${product.slug}/${sub.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg transition-transform duration-300 hover:scale-105 p-4 text-center"
                >
                  <img
                    src={sub.image}
                    alt={sub.name}
                    className="mx-auto h-24 w-auto mb-3 object-contain"
                  />
                  <p className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
                    {sub.name}
                  </p>
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
