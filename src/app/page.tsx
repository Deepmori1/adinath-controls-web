import Link from 'next/link';
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adinath Controls</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
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
    </main>
  )
}
