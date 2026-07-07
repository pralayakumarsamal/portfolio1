
const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-slate-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h2 className="text-3xl font-bold">
              Pralaya<span className="text-purple-500">.</span>
            </h2>

            <p className="text-gray-400 mt-2">
              MERN Stack Developer | Building Modern Web Applications
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#home" className="hover:text-purple-400">Home</a>
            <a href="#about" className="hover:text-purple-400">About</a>
            <a href="#skills" className="hover:text-purple-400">Skills</a>
            <a href="#projects" className="hover:text-purple-400">Projects</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </div>

        </div>

        <hr className="border-slate-700 my-8" />

        <div className="text-center text-gray-400">
          © 2026 Pralaya Kumar Samal. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;