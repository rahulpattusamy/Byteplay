import { FaWhatsapp } from "react-icons/fa"


const WhatIcon = () => {
  return (
    <div>
      <div className="bg-gray-950 min-h-screen text-white relative">
      {/* Your content */}
      <h1 className="text-4xl font-bold text-center pt-10 text-purple-400">
        🎮 Game Discovery
      </h1>

      {/* ✅ WhatsApp Floating Icon (Bottom Right Corner) */}
      <a
        href="https://wa.me/919876543210" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/50 transition-transform hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
    </div>
  )
}

export default WhatIcon