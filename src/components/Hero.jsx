
import profile from "../assets/profile.png";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
} from "react-icons/fa";



const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050816] text-white flex items-center pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">

        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* Left Side */}
          <div>

            <p className="text-purple-400 font-semibold tracking-widest uppercase">
              Hello, I'm
            </p>

            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-4">
              Pralaya Kumar
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
                Samal
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl text-cyan-400 font-bold mt-6">
              MERN Stack Developer
            </h2>

            <p className="text-gray-300 mt-6 leading-8 max-w-xl">
              Passionate MERN Stack Developer with 1.6+ years of experience
              building responsive, scalable and modern web applications using
              React.js, Node.js, Express.js, MongoDB, MySQL and Tailwind CSS.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-8">

              <a
                href="https://github.com/pralayakumarsamal"
                target="_blank"
                rel="nonreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-purple-600 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/pralaya-kumar-samal-a46a792b6"
                target="_blank"
                rel="nonreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:pralayasamal486@gmail.com"
                target="_blank"
                rel="nonreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-pink-600 transition"
              >
                <FaEnvelope />
              </a>

            </div>

            {/* Buttons */}
            <div className="flex gap-5 mt-8 flex-wrap">

              <button className="flex items-center gap-2 bg-linear-to-r from-purple-600 to-pink-500 px-7 py-4 rounded-xl font-semibold hover:scale-105 transition">

                <FaArrowRight />

                View Projects

              </button>


              <a
                href="/resume.pdf"
               download="resume.pdf"
               className="flex items-center gap-2 border-2 border-purple-500 px-7 py-4 rounded-xl font-semibold text-white hover:bg-purple-600 transition"
               >
              <FaDownload />
                Download CV
              </a>
              
                            
            </div>

          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-30"></div>

              <img
                src={profile}
                alt="Pralaya Kumar Samal"
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-105 lg:h-105 object-cover rounded-full border-4 border-purple-500 shadow-[0_0_60px_rgba(168,85,247,0.6)] hover:scale-105 transition-all duration-500"
              />

              {/* Decorative Circles */}
              <div className="absolute -top-6 -left-6 w-10 h-10 rounded-full bg-purple-500"></div>

              <div className="absolute -bottom-6 -right-6 w-8 h-8 rounded-full bg-pink-500"></div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;