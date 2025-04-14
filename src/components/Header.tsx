"use client";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 40 && !scrolled) {
        setScrolled(true);
      } else if (currentScroll < 20 && scrolled) {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const navLinks = (
    <>
      {[
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ].map(({ label, href }) => {
        const isActive = pathname === href;
  
        return (
          <Link
            key={href}
            href={href}
            className="relative group px-2 py-1"
          >
            <span
              className={`after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-white after:transition-all after:duration-300
                ${isActive ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}`}
            >
              {label}
            </span>
          </Link>
        );
      })}
    </>
  );

  return (
    <header className={`bg-blue-900 text-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}>
      <div className="w-full flex items-center justify-between relative px-4 max-w-6xl mx-auto">
        
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-90">
          <img
            src="/Images/Adinath Logo/Adinath Logo_Clear Background.png"
            alt="Adinath Controls"
            className={`transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'} w-auto`}
          />
          <span className="text-2xl font-bold">Adinath Controls</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 items-center">
          {navLinks}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-800 ease-in-out ${
          menuOpen ? "max-h-96 mt-2 py-4 opacity-100" : "max-h-0 opacity-0"
        } flex flex-col items-center space-y-3`}
      >
        {navLinks}
      </div>
    </header>
  );
}
