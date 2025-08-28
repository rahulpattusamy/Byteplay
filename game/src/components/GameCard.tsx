import { useState } from "react";
import { motion } from "framer-motion"; 
import games from "../games.json";

const GameCard = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(games.map((g) => g.genre))];

  const filteredGames =
    selectedGenre === "All"
      ? games
      : games.filter((g) => g.genre === selectedGenre);


  return (
    <section id="games" className="py-16 px-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-white">
        Games: <span className="text-lg text-gray-300">{selectedGenre}</span>
      </h1>
      <div className="flex justify-center mb-8">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="select select-bordered w-60 bg-gray-900 font-bold text-white 
                     border-purple-600 focus:border-pink-500"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      {/* Games Grid */}
      <motion.div
        className="grid gap-8 
                   grid-cols-1 
                   sm:grid-cols-2 
                   md:grid-cols-2 
                   lg:grid-cols-3 
                   xl:grid-cols-4 
                   place-items-center 
                   mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }} 
      >
        {filteredGames.slice(0, 24).map((g) => (
          <motion.div
            key={g.id}
            className="card h-80 w-full sm:w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
               shadow-lg shadow-purple-900/30 border border-gray-800 rounded-2xl 
               hover:shadow-pink-500/30 transition-all duration-300"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.25 }} 
            transition={{ duration: 0.45, ease: "easeOut" }}
            whileHover={{ scale: 1.03, rotate: 0.5 }} 
            whileTap={{ scale: 0.98 }} 
            style={{ willChange: "transform" }}
          >
            <figure>
              <img
                src={g.thumbnail}
                alt={g.title}
                className="h-45 w-full object-cover rounded-t-2xl"
              />
            </figure>
            <div className="card-body text-left">
              <h2 className="card-title text-white font-bold ml-2 text-lg">
                {g.title}
              </h2>
              <p className="text-sm ml-2 text-gray-100">{g.genre}</p>

              <div className="card-actions justify-between flex items-center mt-2">
                <span className="badge p-1 rounded-sm ml-2 badge-lg bg-purple-700 text-white border-none">
                  {g.platform}
                </span>
                <button className="btn btn-sm bg-gradient-to-r from-purple-600 to-pink-600 text-white border-none hover:scale-105 transition p-1 rounded-sm mr-2">
                  Play Now
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GameCard;
