
const About = () => {
  return (
    <section
      id="about"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-12">
          About <span className="text-purple-500">Me</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">
              MERN Stack Developer
            </h3>

            <p className="text-gray-300 text-lg leading-9">
              I am a passionate MERN Stack Developer with 1.6+ years of
              experience in developing responsive and scalable web
              applications. I specialize in MongoDB, Express.js, React.js,
              Node.js, JavaScript, Tailwind CSS, HTML, CSS and MySQL.
            </p>

            <p className="text-gray-300 text-lg leading-9 mt-6">
              I enjoy solving real-world problems, creating modern user
              interfaces, developing secure REST APIs, and continuously
              improving my skills to build high-quality software.
            </p>

            <button className="mt-8 bg-linear-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Read More
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <h1 className="text-5xl font-bold text-purple-500">1.6+</h1>
              <p className="mt-3 text-gray-300">Years Experience</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <h1 className="text-5xl font-bold text-purple-500">10+</h1>
              <p className="mt-3 text-gray-300">Projects</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <h1 className="text-5xl font-bold text-purple-500">8+</h1>
              <p className="mt-3 text-gray-300">Technologies</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-8 text-center">
              <h1 className="text-5xl font-bold text-purple-500">100%</h1>
              <p className="mt-3 text-gray-300">Dedication</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;