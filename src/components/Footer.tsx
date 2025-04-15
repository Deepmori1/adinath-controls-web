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
              <Phone size={18} className="text-blue-600"/>
              <a href="tel:+919825734038" className="hover:underline">
                +91 9825734038
              </a>
            </div>
            <div className="flex items-start space-x-2 mt-4">
              <Mail size={18} className="text-blue-600 mt-1" />
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
              <MapPin size={18} className="text-blue-600 mt-1" /> 
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
