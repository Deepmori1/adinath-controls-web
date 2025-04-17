"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Adinath Controls</h1>
        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
          Driving excellence in industrial automation with over two decades of experience, innovation, and trusted partnerships.
        </p>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Established in 2002, Adinath Controls Pvt. Ltd. is a leading provider of industrial automation solutions
            specializing in precision electrical and automation systems. With a strong commitment to quality and service,
            we have been the trusted partner for numerous industries including plastics, packaging, textiles, pharmaceuticals,
            and more.
          </p>
        </div>
        <div>
          <img
            src="/Images/About/about-industrial.jpg"
            alt="About Adinath Controls"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Strengths */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Trusted Distributors</h3>
              <p className="text-gray-600">
                Sole authorized distributor for globally recognized brands like Athena (USA), Onehalf20 (Canada), and Pyrosales (Australia).
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Custom Solutions</h3>
              <p className="text-gray-600">
                We deliver tailored automation solutions that integrate seamlessly into your production environment.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Nationwide Support</h3>
              <p className="text-gray-600">
                Headquartered in Gujarat with sales and support across India, ensuring rapid assistance and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Automate Smarter?</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Join the growing list of manufacturers who trust Adinath Controls for high-performance automation and electrical solutions.
        </p>
        <a
          href="/products"
          className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore Our Products
        </a>
      </section>

      <Footer />
    </main>
  );
}
