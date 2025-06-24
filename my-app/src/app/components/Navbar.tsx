/* === FILE: components/Navbar.tsx === */
export default function Navbar() {
  return (
    <header className="p-4 fixed w-full z-50 bg-black bg-opacity-70 backdrop-blur">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">AstroArc</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
