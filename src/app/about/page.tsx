import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (

    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          At Adinath Controls, we specialize in delivering top-quality electrical and automation solutions. Our expertise and dedication ensure that our clients receive innovative products designed to meet their specific needs.
        </p>
      </div>

      <Footer />

    </main>
  );
}
  