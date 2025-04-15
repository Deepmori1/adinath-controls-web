"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (

    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      {/* Page Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-blue-900">Welcome to Adinath Controls</h2>
          <p className="text-lg text-gray-600 font-light">
            We provide premium electrical & automation solutions for industrial control systems.
          </p>
        </section>

        {/* Partners Section */}
        <section>
          <h3 className="text-2xl font-semibold text-center mb-8 text-blue-800">
            Authorized Sole Distributor Of India
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Athena Card */}
            <a
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
            </a>

            {/* OneHalf20 Card */}
            <a
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
            </a>
          </div>
        </section>
      </div>

      <Footer />

    </main>
  );
}