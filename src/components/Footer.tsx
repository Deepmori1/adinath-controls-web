export default function Footer() {
    return (
      <footer className="bg-white shadow-inner border-t border-gray-300 text-gray text-center py-4 mt-10">
        <div className="space-y-1">
          <p>Contact us: +91 12345 67890 | info@adinathcontrols.com</p>
          <p>123 Industrial Lane, Ahmedabad, Gujarat</p>
          <p className="text-sm text-gray mt-2">
            &copy; {new Date().getFullYear()} Adinath Controls. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }