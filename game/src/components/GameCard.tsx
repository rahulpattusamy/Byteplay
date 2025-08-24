import { useState } from "react";
import games from "../games.json";

const GameCard = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All", ...new Set(games.map((g) => g.genre))];

  
  const filteredGames =
    selectedGenre === "All"
      ? games
      : games.filter((g) => g.genre === selectedGenre);

  return (
    <div id="games" className="min-h-screen lg:p-6"> 
    <h1  className="text-xl font-bold text-center">Games: <span className="text-lg">{selectedGenre}</span></h1>
      <div className="flex ml-22 mb-8">
        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="select select-bordered w-60 bg-gray-900  font-bold text-white border-purple-600 focus:border-pink-500"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 pl-10 lg:pl-20 gap-6">
        {filteredGames.slice(0, 21).map((g) => (
          <div
            key={g.id}
            className="card h-80 w-80 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 
                       shadow-lg shadow-purple-900/30 border border-gray-800 rounded-2xl 
                       hover:scale-105 hover:shadow-pink-500/30 transition-all duration-300"
          >
            <figure>
              <img
                src={g.thumbnail}
                alt={g.title}
                className="h-48 w-full object-cover rounded-t-2xl"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameCard;


