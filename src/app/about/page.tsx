import Link from 'next/link';
export default function About() {
    return (
      <main className="min-h-screen bg-white text-gray-800">
        <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Adinath Controls</h1>
          <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
        </header>
  
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg mb-6">
            At Adinath Controls, we specialize in delivering top-quality electrical and automation solutions. Our expertise and dedication ensure that our clients receive innovative products designed to meet their specific needs.
          </p>
        </div>
      </main>
    );
  }
  