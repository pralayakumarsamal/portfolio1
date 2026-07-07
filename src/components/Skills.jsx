

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API"
  ,
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-4">
          My <span className="text-purple-500">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Technologies I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 rounded-2xl p-8 text-center hover:bg-purple-600 transition duration-300 hover:scale-105 shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{skill}</h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;