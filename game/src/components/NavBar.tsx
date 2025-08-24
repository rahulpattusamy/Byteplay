const NavBar = () => {
  return (
    <nav className="h-20 w-full border-b border-b-gray-700 flex items-center justify-between px-8 bg-gray-950 sticky top-0 z-50">
      <p className="text-purple-500 text-2xl font-extrabold tracking-wide">
        BYTE <span className="text-pink-500">PLAY</span>
      </p>
      <div className="flex space-x-8 text-gray-300 font-medium">
        <a href="#about" className="hover:text-purple-400 transition">
          About Us
        </a>
         <a href="#games" className="hover:text-purple-400 transition">
          Games
        </a>
        <a href="#privacy" className="hover:text-purple-400 transition">
          Privacy Policy
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
