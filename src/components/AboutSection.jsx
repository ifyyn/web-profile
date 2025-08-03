import { motion } from "framer-motion";

const AboutSection = () => {
  const skills = [
    "React.js",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "Figma",
    "UI/UX Design",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-6xl font-bold mb-2 text-[#f6c432]">
            About <span className="text-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-2"></div>
          <p className="max-w-3xl text-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <div className="relative bg-primary rounded-lg overflow-hidden">
                <img
                  src="./images/profile1.png"
                  alt="Profile"
                  className="w-[600px] h-auto object-cover rounded-b-full"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#f6c432]">
              Saya Fathul Arifin
            </h3>
            <p className="font-serif mb-6">
              I'm a passionate web developer with expertise in creating modern,
              responsive, and user-friendly websites and applications. With a
              strong foundation in JavaScript and its ecosystem, I specialize in
              React.js for frontend development.
            </p>
            <p className="font-serif mb-8">
              My approach combines technical skills with creative
              problem-solving to deliver high-quality digital experiences. I'm
              constantly learning and adapting to new technologies to stay at
              the forefront of web development.
            </p>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-[#f6c432] text-black px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
