const Navbar = () => {
  return (
    <nav className="w-full h-16 bg-black text-white shadow-md flex items-center justify-between px-8">
      {/* Logo / App Name */}
      <div className="text-xl font-bold text-white">
        Simplink
      </div>

      {/* Navigation Buttons */}
      <div className="space-x-4">
        <button className="px-4 py-2 text-sm font-medium text-white border border-white rounded-full hover:bg-white hover:text-black transition">
          Sign In
        </button>
        <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-200 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
