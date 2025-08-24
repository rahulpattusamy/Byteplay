

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import games from "../games.json";

const GameBannerCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 3000 })] 
  );

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[600px] rounded-2xl overflow-hidden shadow-2xl mt-20">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {games.slice(0, 10).map((g) => (
            <div
              key={g.id}
              className="flex-[0_0_100%] relative h-full"
            >
              <img
                src={g.thumbnail}
                alt={g.title}
                className="w-full h-100  lg:h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                  {g.title}
                </h2>
                <p className="text-gray-200 text-lg">
                  {g.genre} • {g.platform}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBannerCarousel;
