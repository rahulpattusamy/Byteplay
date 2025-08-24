
const NavBar = () => {
  return (
    <nav className=" h-20 max-w-full border-b border-b-gray-400 flex items-center justify-around">
     <p className="text-purple-500 text-xl font-bold">
      BYTE PLAY
     </p>
      <div className="p-6">
      <div className="form-control w-full max-w-sm mb-6">
        <input
          type="text"
          placeholder="Search games..."
          className="input input-bordered w-60 border input-lg input-primary rounded-xs placeholder:pl-2"
        />
      </div>
      </div>
    </nav>
  )
}

export default NavBar