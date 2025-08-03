const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3QlMjB3ZWJ8ZW58MHx8MHx8fDA%3D",
      link: "#",
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A modern portfolio template for creatives",
      tags: ["HTML", "CSS", "JavaScript"],
      image:
        "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvamVjdCUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity app for managing daily tasks",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1555209183-8facf96a4349?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdCUyMHdlYnxlbnwwfHwwfHx8MA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            My <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-yellow-500/50 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-600 transition duration-300"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-md font-medium hover:bg-yellow-500 hover:text-black transition duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
