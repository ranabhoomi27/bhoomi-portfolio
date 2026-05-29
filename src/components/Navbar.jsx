function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-20 py-6 bg-white/80 backdrop-blur sticky top-0 z-50 border-b border-gray-100">
      <h1 className="text-2xl font-bold tracking-tight">BR.</h1>

      <div className="hidden md:flex gap-10 text-sm font-medium text-gray-700">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="#contact"
        className="bg-black hover:bg-gray-900 hover:scale-105 active:scale-95 transition-all duration-300 text-white px-5 py-3 rounded-2xl text-sm shadow-lg inline-block"
      >
        Let’s Connect
      </a>
    </nav>
  );
}

export default Navbar;