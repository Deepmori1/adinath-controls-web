import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Gradient line above footer */}
      <div className="h-1.5 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" />

      <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-6 gap-10">
          {/* Quick Contact */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-3">Quick Contact</h4>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92V19a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.12A19.5 19.5 0 0 1 3.12 10.8 19.8 19.8 0 0 1 0 2.18 2 2 0 0 1 2 0h2.08a2 2 0 0 1 2 1.72c.12 1.06.3 2.12.55 3.17a2 2 0 0 1-.45 1.94L5.1 8.35a16 16 0 0 0 6.55 6.55l1.52-1.52a2 2 0 0 1 1.94-.45c1.05.25 2.11.43 3.17.55a2 2 0 0 1 1.72 2z" /></svg>
              <a href="tel:+919825734038" className="hover:underline">
                +91 9825734038
              </a>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              <div className="flex flex-col space-y-0">
                <a href="mailto:sales@adinathcontrols.com" className="hover:underline">
                  sales@adinathcontrols.com
                </a>
                <a href="mailto:service@adinathcontrols.com" className="hover:underline">
                  service@adinathcontrols.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Logo + Address */}
          <div className="md:col-span-3 flex items-center justify-center space-x-6">
            <div className="flex flex-col items-center">
              <img src="/Images/Adinath Logo/Adinath Logo_Clear Background.png" alt="Adinath Logo" className="h-32" />
              <p className="text-black mt-2">Empowering Automation Excellence</p>
            </div>
            <div className="flex items-start space-x-2 text-left">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600 mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              <div className="text-sm text-gray-700">
                <p>ADINATH CONTROLS PVT LTD</p>
                <p>816/5, Kothari Industrial Estate</p>
                <p>Santej-Rakanpur Road, Santej</p>
                <p>Taluka Kalol, Dist. Gandhinagar</p>
                <p>382 721, Gujarat, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-300">
          &copy; {new Date().getFullYear()} Adinath Controls. All rights reserved.
        </div>
      </footer>
    </>
  );
}
