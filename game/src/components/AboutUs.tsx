const AboutUs = () => {
  return (
    <section id="about" className="min-h-screen max-w-4xl mx-auto px-6 py-12 text-gray-300">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">About Us</h1>
      <p className="mb-4 text-center">
        Welcome to <span className="text-purple-400 font-semibold">Byte Play</span>, 
        your ultimate gaming hub!
      </p>
      <p className="mb-4">
        At Byte Play, we believe games are more than entertainment—they’re 
        experiences, stories, and adventures waiting to be explored. Our mission 
        is to bring <span className="text-pink-600">free and trending games</span> 
         right to your fingertips, so you can discover, play, and enjoy without limits.
      </p>
      <p className="mb-4">
        Whether you’re a fan of action-packed shooters, epic RPGs, casual puzzles, 
        or strategy games, Byte Play is built for gamers of all kinds.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-white text-center">Why Byte Play?</h2>
      <ul className="list-disc list-inside space-y-2 text-gray-400 lg:ml-60">
        <li>Curated list of top-rated and free-to-play games</li>
        <li>Easy-to-use interface with categories and search</li>
        <li>A platform built by gamers, for gamers</li>
        <li>100% free access with no hidden costs</li>
      </ul>
    </section>
  );
};

export default AboutUs;
