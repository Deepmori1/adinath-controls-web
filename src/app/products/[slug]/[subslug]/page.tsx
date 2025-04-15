"use client";

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SubProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const subslug = params.subslug as string;

  const product = products.find((p) => p.slug === slug);
  const subProduct = product?.subProducts?.find((sp) => sp.slug === subslug);
  

  if (!product || !subProduct) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <img
          src={subProduct.image}
          alt={subProduct.name}
          className="h-48 w-auto mx-auto mb-8 object-contain"
        />
        <h1 className="text-4xl font-bold mb-4">{subProduct.name}</h1>
        <p className="text-lg text-gray-600 mb-8">
          Detailed view of {subProduct.name}. You can add content here.
        </p>

        {/* Downloads Section */}
        {subProduct.pdfs?.length > 0 && (
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