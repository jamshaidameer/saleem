export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Jamshaid Ameer</h2>
          <p className="text-sm">
            Building modern and responsive web apps with Next.js & TailwindCSS.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-indigo-400">Home</a></li>
            <li><a href="/about" className="hover:text-indigo-400">About</a></li>
            <li><a href="/service" className="hover:text-indigo-400">Service</a></li>
            <li><a href="/contact" className="hover:text-indigo-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Contact</h2>
          <p className="text-sm">📍 Lahore, Pakistan</p>
          <p className="text-sm">📧 jamshaid@example.com</p>
          <p className="text-sm">📞 +92 300 1234567</p>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} Jamshaid Ameer. All rights reserved.
      </div>
    </footer>
  );
}
