const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-xl font-semibold text-white">BytePlay</h2>
        <p className="text-sm mt-2">
          Play free games online. Explore, have fun, and enjoy endless gaming!
        </p>

        <div className="flex justify-center space-x-6 mt-4">
          <a href="/about" className="hover:text-white transition">
            About Us
          </a>
          <a href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} BytePlay. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
