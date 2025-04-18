"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from "next/image";
import Link from "next/link";

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
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
            Established in 2002, Adinath Controls Pvt. Ltd. is a leading provider of industrial automation solutions
            specializing in precision electrical and automation systems. With a strong commitment to quality and service,
            we have been the trusted partner for numerous industries including plastics, packaging, textiles, pharmaceuticals,
            and more.
          </p>
        </div>
        <div className="relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/Images/About/about-industrial.jpg"
            alt="About Adinath Controls"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/Images/About/about-industrial.jpg"
            alt="About Adinath Controls"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Foundations of Innovation</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
          The year was 1987. Nitin Desai (MSEE, USA), along with a dedicated team of technocrats with years of relevant 
          experience, gave firm shape to a company in the field of manufacturing and marketing Auto-tune PID Temperature Controllers, 
          Temperature Indicators, SCR Power Controllers, and temperature sensors such as Thermocouples and RTDs. The company 
          also specialized in customized control panels based on customer requirements.</p>

          <p className="text-gray-700 text-lg leading-relaxed py-2 text-justify">
          To keep pace with international technological developments, the company entered into a collaboration with 
          Athena Controls Inc., USA. Thus, Athena Controls (India) Pvt. Ltd. was established — an Inductotherm Group Company. 
          In line with the philosophy of our collaborator, we believed in service-oriented marketing and the concept 
          of “Total Access,” where customers could reach out to any team member for the right guidance on temperature 
          control applications.</p>

          <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Following a business restructuring, the company was renamed Adinath Controls Pvt. Ltd. The rest, as they say, 
          is quality assured.
          </p>
        </div>   
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      <div>
          <h2 className="text-3xl font-semibold text-blue-800 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed text-justify">
          To be a trusted global leader in industrial automation by delivering innovative, 
          reliable, and intelligent control solutions that empower manufacturers to achieve operational excellence, 
          sustainability, and technological advancement.
         
          </p>
        </div> 
        <div className="relative w-full aspect-[4/3] rounded-xl shadow-lg overflow-hidden">
          <Image
            src="/Images/About/Our Vision.png"
            alt="About Adinath Controls"
            fill
            className="object-cover"
            priority
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
        <Link
          href="/products"
          className="inline-block bg-blue-800 text-white font-semibold px-8 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore Our Products
        </Link>
      </section>

      <Footer />
    </main>
  );
}
