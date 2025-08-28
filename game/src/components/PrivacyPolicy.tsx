import { FaWhatsapp } from "react-icons/fa";

const PrivacyPolicy = () => {
  return (
    <section id="privacy" className=" min-h-screen max-w-4xl mx-auto px-6 py-12 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Privacy Policy</h1>
      <p className="mb-4">
        At <span className="text-purple-400 font-semibold">Byte Play</span>, 
        your privacy is very important to us. This policy explains how we collect, 
        use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2 text-fuchsia-700">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect basic information like your name, email, or preferences if you sign up 
        or interact with our site. Non-personal data (browser type, device, usage patterns) 
        may also be collected to improve your experience.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2  text-fuchsia-700">2. How We Use Your Information</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400 mb-4">
        <li>To personalize your gaming experience</li>
        <li>To improve website features and design</li>
        <li>To send updates or recommendations (if opted in)</li>
        <li>To maintain security and prevent misuse</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2  text-fuchsia-700">3. Cookies</h2>
      <p className="mb-4">
        Byte Play may use cookies to enhance your browsing experience. You can disable cookies 
        anytime in your browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2  text-fuchsia-700">4. Security</h2>
      <p className="mb-4">
        We take reasonable steps to protect your data from unauthorized access or misuse.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-2  text-fuchsia-700">5. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please reach out to us:  
        📧 <span className="text-purple-400">support@byteplay.com</span>
      </p>
       <a
        href="https://wa.me/7397036042"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/50 transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </section>
  );
};

export default PrivacyPolicy;
