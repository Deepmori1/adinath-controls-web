import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Products() {
  return (

    <main className="min-h-screen bg-white text-gray-800">

      <Header />

      {/* Content */}  
      <div className="p-6">
        <h2 className="text-3xl font-bold mb-6">Our Product Range</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded shadow">PLC Control Panels</div>
          <div className="bg-gray-100 p-4 rounded shadow">AC Drive Panels</div>
          <div className="bg-gray-100 p-4 rounded shadow">MCC Panels</div>
          <div className="bg-gray-100 p-4 rounded shadow">Relay Logic Panels</div>
          <div className="bg-gray-100 p-4 rounded shadow">SCADA Solutions</div>
          <div className="bg-gray-100 p-4 rounded shadow">Custom Automation Projects</div>
        </div>
      </div>  

      <Footer />

    </main>
  );
}
  