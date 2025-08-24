export const HeroSection = () => {
  return (
    <div>
      <section className="relative py-20 px-6 text-center overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
            Welcome to <span className="text-purple-600">Byte Play</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            🎮 Discover free & trending games. Play instantly, explore new
            worlds, and stay ahead with the latest gaming titles — all in one
            place.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:scale-105 transform transition">
              Browse Games
            </button>
            <button className="border border-pink-400 text-pink-400 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
              Explore Categories
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
