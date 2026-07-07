
const projects = [
  {
    title: "Hotel Booking System",
    tech: "React.js • Node.js • Express.js • MongoDB",
    description:
      "A full-stack hotel booking platform with authentication, room booking, admin dashboard, and secure REST APIs.",
  },

  {
    title: "Image Gallery",
    tech: "HTML • CSS • JavaScript",
    description:
      "A responsive image gallery with hover effects, smooth transitions, and modern UI design.",
  },
  {
    title: "Parallax Website",
    tech: "HTML • CSS",
    description:
      "A modern landing page featuring parallax scrolling, responsive layouts, and attractive animations.",
  },

  {
    title: "Study Notion",
    tech: "React.js • Node.js • Express.js • MongoDB",
    description:
      "A full-stack EdTech platform with Student, Instructor, and Admin roles. Features include JWT authentication, course management, video lectures, payment integration, and responsive dashboard.",
  },

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0f172a] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Some of my recent work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-2xl p-8 hover:scale-105 hover:bg-slate-700 transition duration-300 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-400">
                {project.title}
              </h3>

              <p className="text-cyan-400 mt-3">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-5 leading-8">
                {project.description}
              </p>

              <button className="mt-8 bg-linear-to-r from-purple-600 to-pink-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
                View Project
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;