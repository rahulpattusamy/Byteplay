

export const HeroSection = () => {
  return (
    <div>
     <section className="relative py-20 px-6 text-center overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-fuchsia-900 opacity-90"></div>
  <div className="absolute top-10 left-10 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-30"></div>
  <div className="absolute bottom-10 right-10 w-40 h-40 bg-fuchsia-700 rounded-full blur-3xl opacity-30"></div>

  {/* Main Content */}
  <div className="relative z-10">
    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
      Welcome to <span className="text-purple-600">Byte Play</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
      🎮 Discover free & trending games. Play instantly, explore new worlds, 
      and stay ahead with the latest gaming titles — all in one place.
    </p>

    {/* Action Buttons */}
    <div className="flex justify-center gap-4 mb-8">
      <button
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transform transition"
      >
        Browse Games
      </button>
      <button
        className="border border-pink-400 text-pink-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition"
      >
        Explore Categories
      </button>
    </div>

    {/* Extra Features */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-10">
      <div className="p-6 bg-black/50 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold text-pink-400 mb-2">🔥 Trending Games</h3>
        <p className="text-gray-300 text-sm">Stay updated with the hottest titles everyone’s playing.</p>
      </div>
      <div className="p-6 bg-black/50 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold text-purple-400 mb-2">🎮 Play Instantly</h3>
        <p className="text-gray-300 text-sm">No hassle. Browse, choose, and dive into your favorite games instantly.</p>
      </div>
      <div className="p-6 bg-black/50 rounded-2xl shadow-lg hover:scale-105 transition">
        <h3 className="text-xl font-bold text-pink-400 mb-2">⚡ Categories</h3>
        <p className="text-gray-300 text-sm">Action, RPG, Strategy, and more — find your perfect match.</p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
