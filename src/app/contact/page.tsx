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
          <li className="flex">
            <strong className="min-w-[90px]">Phone:</strong>
            <span>+91 9825734038</span>
          </li>
          <li className="flex">
            <strong className="min-w-[90px]">Email:</strong>
            <span>sales@adinathcontrols.com</span>
          </li>
          <li className="flex items-start">
            <strong className="min-w-[90px]">Address:</strong>
            <div>
              <p>816/5, Kothari Industrial Estate</p>
              <p>Santej-Rakanpur Road, Santej</p>
              <p>Taluka Kalol, Dist. Gandhinagar</p>
              <p>382 721, Gujarat, India</p>
            </div>
          </li>
        </ul>
      </div>

      <Footer />

    </main>
  );
}  