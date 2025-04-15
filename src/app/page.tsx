"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (

    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      <section className="font-sans bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
          The industrial automation partner that <br />
          <span className="text-blue-300">drives your efficiency</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8">
          We deliver precision electrical & automation systems for modern manufacturing environments.
        </p>
        <Link
          href="/products"
          className="inline-block bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition"
        >
          Explore Products
        </Link>
      </section>

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* Partners Section */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
            Authorized Sole Distributor Of India
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Athena Card */}
            <Link
              href="https://www.athenacontrols.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center w-50 h-44 text-center"
            >
              <img
                src="/Images/Partners Logo/Athena _ White background.jpeg"
                alt="Athena"
                className="h-20 object-contain mb-3"
              />
              <span className="text-sm font-semibold text-gray-700">Click here for Athena - USA Products</span>
            </Link>

            {/* OneHalf20 Card */}
            <Link
              href="http://www.onehalf20.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 p-4 flex flex-col items-center w-64 h-44 text-center"
            >
              <img
                src="/Images/Partners Logo/Onehalf20 _ White background.jpeg"
                alt="Onehalf20"
                className="h-20 object-contain mb-3"
              />
              <span className="text-sm font-semibold text-gray-700">Click here for OneHalf20 - Canada Products</span>
            </Link>
          </div>
        </section>
      </div>

      <Footer />

    </main>
  );
}