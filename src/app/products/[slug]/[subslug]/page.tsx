// src/app/products/[slug]/[subslug]/page.tsx
'use client';

import { useQuery } from '@tanstack/react-query';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
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
  subProducts?: SubProduct[];
}

export default function SubProductPage() {
  const { slug, subslug } = useParams() as { slug: string; subslug: string };

  const { data: subProduct, isLoading, error } = useQuery({
    queryKey: ['subproduct', slug, subslug],
    queryFn: async () => {
      const snapshot = await getDocs(collection(db, 'products'));
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Product, 'id'>)
      })) as Product[];
      
      const product = products.find(p => p.slug === slug);
      return product?.subProducts?.find(sp => sp.slug === subslug);
    },
  });

  if (isLoading) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="animate-pulse">
            <div className="relative aspect-square w-full max-w-[300px] mx-auto mb-4 bg-gray-200 rounded-lg" />
            <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2" />
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  if (error || !subProduct) {
    return (
      <main className="min-h-screen bg-white">
        <Header />
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="text-red-500">Product not found</div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <motion.div
          layoutId={`product-${slug}-${subslug}`}
          className="mb-12"
        >
          {subProduct?.image && (
            <motion.div
              layoutId={`image-${slug}-${subslug}`}
              className="relative aspect-square w-full max-w-[200px] mx-auto mb-8"
            >
              <Image
                src={subProduct.image}
                alt={subProduct.name}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </motion.div>
          )}
          <motion.h1
            layoutId={`title-${slug}-${subslug}`}
            className="text-4xl font-bold mb-4"
          >
            {subProduct?.name}
          </motion.h1>
        </motion.div>

        {/* PDFs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {subProduct?.pdfs && subProduct.pdfs.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-6">Downloads</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {subProduct.pdfs.map((pdf, index) => (
                  <motion.a
                    key={index}
                    href={pdf.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 ease-in-out shadow-lg hover:scale-105 hover:ring-2 hover:ring-blue-500/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
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
                    <p className="text-lg">
                      {pdf.name}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
      <Footer />
    </main>
  );
}
