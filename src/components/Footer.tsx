import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900 text-white">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500" />
      
      {/* Decorative geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl" />
        <div className="absolute -left-10 bottom-10 w-60 h-60 rounded-full bg-purple-500/10 blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Branding Section */}
          <div className="lg:col-span-4">
            <div className="space-y-8">
              <div className="flex flex-col items-center">
                <img 
                  src="/Images/Adinath Logo/Adinath Logo_Clear Background.png" 
                  alt="Adinath Logo" 
                  className="h-28 mb-3"
                />
                <p className="font-['Playfair_Display'] text-xl italic text-blue-300 mb-8">
                  Empowering Automation Excellence
                </p>

                {/* Address with modern styling */}
                <div className="flex items-start space-x-4 ">
                  <MapPin className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div className="font-['Inter'] text-sm leading-relaxed text-gray-300">
                    <p className="text-white font-semibold tracking-wide mb-2">ADINATH CONTROLS PVT LTD</p>
                    <p>816/5, Kothari Industrial Estate</p>
                    <p>Santej-Rakanpur Road, Santej</p>
                    <p>Taluka Kalol, Dist. Gandhinagar</p>
                    <p>382 721, Gujarat, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-4">
            <h4 className="font-['Montserrat'] text-2xl font-bold mb-8 text-white">Get in Touch</h4>
            <div className="space-y-6">
              <a 
                href="tel:+919825734038" 
                className="flex items-center space-x-4"
              >
                <Phone className="w-6 h-6 text-blue-400" />
                <span className="font-['Inter'] text-lg">+91 9825734038</span>
              </a>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-blue-400 mt-1" />
                <div className="">
                  <a 
                    href="mailto:sales@adinathcontrols.com" 
                    className="font-['Inter'] text-lg block hover:text-blue-300 transition-colors duration-300"
                  >
                    sales@adinathcontrols.com
                  </a>
                  <a 
                    href="mailto:service@adinathcontrols.com" 
                    className="font-['Inter'] text-lg block hover:text-blue-300 transition-colors duration-300"
                  >
                    service@adinathcontrols.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-['Montserrat'] text-2xl font-bold mb-8 text-white">Quick Links</h4>
            <nav>
              <ul className="space-y-6">
                {['Home', 'Products', 'About'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/${item.toLowerCase()}`} 
                      className="group inline-block text-lg text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <span className="relative font-['Inter']">
                        {item}
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>


        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400 font-['Inter'] text-sm">
            &copy; {new Date().getFullYear()} Adinath Controls. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
