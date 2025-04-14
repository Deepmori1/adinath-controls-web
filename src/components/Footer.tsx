import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Gradient line above footer */}
      <div className="h-1.5 bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500" />

      <footer className="bg-white text-gray-700 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-start items-start gap-20">
          
          <div className="flex flex-col space-y-2 text-sm">
            <h3 className="text-3xl font-bold text-gray-800">Quick Contact</h3>

            {/* Phone with icon */}
            <div className="flex items-center space-x-2 text-lg">
              <Phone size={18} className="text-blue-600"/>
              <a href="tel:+919825734038" className="hover:underline">
                +91 9825734038
              </a>
            </div>

            {/* Emails with icon */}
            <div className="flex items-start space-x-2 text-lg">
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

            {/* Address with icon */}
            <div className="flex items-start space-x-2 text-lg">
              <MapPin size={18} className="text-blue-600 mt-1" />
              <div>
                <p>ADINATH CONTROLS PVT LTD</p>
                <p>816/5, Kothari Industrial Estate</p>
                <p>Santej-Rakanpur Road, Santej</p>
                <p>Taluka Kalol, Dist. Gandhinagar</p>
                <p>382 721, Gujarat, India</p>
              </div>
            </div>
          </div>

          {/* Logo + Slogan - RIGHT SIDE */}
          <div className="flex flex-col items-center justify-center space-y-2 text-left">
            <img
              src="/Images/Adinath Logo/Adinath Logo_Clear Background.png"
              alt="Adinath Controls"
              className="h-30 w-auto"
            />
            <p className="text-lg italic text-gray-600">
              Empowering Automation Excellence
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-6">
          &copy; {new Date().getFullYear()} Adinath Controls. All rights reserved.
        </div>
      </footer>
    </>
  );
}
