"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";


export default function Header() {
  // Scroll Header Shrink Logic
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
          const currentScroll = window.scrollY;
    
          // Buffer to prevent flickering
          if (currentScroll > 40 && !scrolled) {
            setScrolled(true);
          } else if (currentScroll < 20 && scrolled) {
            setScrolled(false);
          }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrolled]);
  return (

    <header className={`bg-blue-900 text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
       <div className="w-full flex items-center justify-between relative pl-7">
       
        {/* Header Logo and Name */}

        <Link href="/" className="flex items-center space-x-2 hover:opacity-90">
          <img src="/Images/Adinath Logo/Adinath Logo_Clear Background.png" alt="Adinath Controls" className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'} w-auto`} />
          <span className="text-2xl font-bold">Adinath Controls</span>
        </Link>

        {/* Navigation Links */}
        
        <nav className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
        
        <Link href="/" className="relative group px-2 py-1">
          <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Home
          </span> </Link>

        <Link href="/products" className="relative group px-2 py-1">
          <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Products
          </span> </Link>
        
        <Link href="/about" className="relative group px-2 py-1">
          <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            About
          </span> </Link>
          
        <Link href="/contact" className="relative group px-2 py-1">
          <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
            Contact
          </span> </Link>    

        </nav>
      </div>
    </header>
  );
}