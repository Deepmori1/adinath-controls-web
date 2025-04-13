import Link from 'next/link';
export default function Home() {
  return (
    
    <main className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4">
        <div className="w-full flex flex-row items-center justify-center space-x-6">
          {/* Logo wrapped in Link */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-90">
            <img src="/Adinath Logo/Adinath Logo_Clear Background.png" alt="Adinath Controls" className="h-20 w-auto" />
          </Link>
          <span className="text-2xl font-bold">Adinath Controls</span>
          {/* Navigation Links */}
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </header>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to Adinath Controls</h2>
        <p className="text-lg mb-6">We provide premium electrical & automation solutions for industrial control systems.</p>

        <section className="bg-gray-100 p-4 rounded-md">
          <h3 className="text-2xl font-semibold mb-2">Our Key Offerings</h3>
          <ul className="list-disc list-inside">
            <li>Control Panels</li>
            <li>PLC Automation</li>
            <li>AC Drive Panels</li>
            <li>Customized Engineering Solutions</li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white text-center py-4 mt-10">
        <div className="space-y-1">
          <p>Contact us: +91 12345 67890 | info@adinathcontrols.com</p>
          <p>123 Industrial Lane, Ahmedabad, Gujarat</p>
          <p className="text-sm text-gray-300 mt-2">&copy; {new Date().getFullYear()} Adinath Controls. All rights reserved.</p>
        </div>
      </footer>

    </main>
  )
}
