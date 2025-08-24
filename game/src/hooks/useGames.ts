import { useEffect, useState } from "react";
import api from "../Service/api-client";

interface Game {
  id: number;
  title: string;
  thumbnail: string;
  short_description: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  game_url: string;
}

const useGames = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api
      .get("/games")
      .then((res) => setGame(res.data))
      .catch((err) => setError(err.message));
  }, []);
  return { game, error };
};

export default useGames;
