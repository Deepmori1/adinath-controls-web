import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    
    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      {/* Content */}
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-4">Welcome to Adinath Controls</h2>
        <p className="text-lg mb-6">We provide premium electrical & automation solutions for industrial control systems.</p>

        {/* Partner Logos with Link */}
        <section className="mt-10">
          <h3 className="text-2xl font-semibold mb-4 pl-15">Authorized Sole Distributor Of India</h3>
          <div className="flex items-center gap-10 pl-15">
            <a href="https://www.athenacontrols.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/Partners Logo/Athena _ White background.jpeg"
                alt="Athena"
                className="h-32 w-40 hover:opacity-80 transition"
                /* className="h-32 w-40 hover:opacity-80 transition" */
              />
            </a>
            <a href="http://www.onehalf20.com/" target="_blank" rel="noopener noreferrer">
              <img
                src="/Images/Partners Logo/Onehalf20 _ White background.jpeg"
                alt="Onehalf20"
                className="h-17 w-55 hover:opacity-80 transition"
              />
            </a>
          </div>
        </section>
      </div>

      <Footer />

    </main>
  )
}
