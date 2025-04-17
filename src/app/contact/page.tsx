"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '@/app/globals.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Simplified phone handler
  const handlePhoneChange = (phone: string) => {
    setFormData(prev => ({ ...prev, phone }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/mgvabypj", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData).toString()
      });

      if (response.ok) {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSuccessMessage('Message sent successfully!');
        setShowSuccess(true);
      
        setTimeout(() => {
          setShowSuccess(false);
          setTimeout(() => setSuccessMessage(''), 500);
        }, 5000);

      } else {
        console.error("Formspree error:", await response.text());
        setSuccessMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccessMessage('Submission failed. Please check your connection.');
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="text-lg text-blue-100 max-w-xl mx-auto">
          We&apos;d  love to hear from you. Reach out for inquiries, support, or partnership opportunities.
        </p>
      </section>

      {/* Map */}
      <div className="mt-12 px-6 max-w-6xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d117507.95099323419!2d72.4475377!3d23.0192384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2ba322eae237%3A0x2ef8c5338fde894a!2sAdinath%20Controls%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1630566080059!5m2!1sen!2sin"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="rounded-xl"
        />
      </div>

      {/* Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-11 gap-16 max-w-5xl mx-auto px-6 py-12 text-lg">
        <div className="lg:col-span-3">
          <h3 className="font-bold text-blue-800 mb-2">Phone</h3>
          <p>+91 9825734038</p>
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-bold text-blue-800 mb-2">Email</h3>
          <div className="">
                  <a 
                    href="mailto:sales@adinathcontrols.com" 
                    className="block hover:text-blue-600"
                  >
                    sales@adinathcontrols.com
                  </a>
                  <a 
                    href="mailto:service@adinathcontrols.com" 
                    className="block hover:text-blue-600"
                  >
                    service@adinathcontrols.com
                  </a>
                </div>
          
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-bold text-blue-800 mb-2">Address</h3>
          <p>816/5, Kothari Industrial Estate</p>
          <p>Santej-Rakanpur Road, Santej</p>
          <p>Taluka Kalol, Dist. Gandhinagar</p>
          <p>382 721, Gujarat, India</p>
        </div>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto px-6 py-8 space-y-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <div className="phone-input-container">
        <PhoneInput
          country={'in'}
          value={formData.phone}
          onChange={phone => handlePhoneChange(phone)}
          containerStyle={{ width: '100%' }}
          inputStyle={{ width: '100%', height: '48px' }}
          buttonStyle={{ backgroundColor: 'white' }}
        />
        </div>
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded-md"
        />
        <div className="flex items-center gap-4">
          <button
            type="submit"
            className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
          {successMessage && (
            <p
              className={`text-green-600 text-center mt-4 transition-opacity duration-500 ${
                showSuccess ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {successMessage}
            </p>
          )}
        </div>
      </form>


      {/* CTA */}
      <div className="text-center mt-16 text-lg text-gray-600">
        <p>
          Looking for automation solutions?{' '}
          <Link href="/products" className="text-blue-600 underline hover:text-blue-800">
            Explore our products
          </Link>.
        </p>
      </div>

      <Footer />
    </main>
  );
}
