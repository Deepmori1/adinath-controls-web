import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  return (

    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-4">We’d love to hear from you. Reach out to us via the details below:</p>
        <ul className="text-lg space-y-2">
          <li><strong>Phone:</strong> +91 12345 67890</li>
          <li><strong>Email:</strong> info@adinathcontrols.com</li>
          <li><strong>Address:</strong> 123 Industrial Lane, Ahmedabad, Gujarat</li>
        </ul>
      </div>

      <Footer />

    </main>
  );
}  