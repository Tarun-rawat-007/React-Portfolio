import { useState } from "react";
import { motion } from "framer-motion";

const Wca = () => {
  const [activeSection, setActiveSection] = useState("Certificates");

  return (
    <div className="w-full p-6 bg-gray-900 text-white shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6">My Portfolio</h1>

      {/* Buttons with Animation */}
      <div className="flex justify-center gap-4 mb-6">
        {["Achievements", "Certificates", "Work Experience"].map((section) => (
          <motion.button
            key={section}
            className={`px-6 py-2 rounded transition ${
              activeSection === section ? "bg-blue-500" : "bg-gray-700"
            }`}
            onClick={() => setActiveSection(section)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </motion.button>
        ))}
      </div>

      {/* Content Section with Animation */}
      <motion.div
        className="p-4 bg-gray-800 rounded-lg"
        key={activeSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {/* Achievements Section */}
        {activeSection === "Achievements" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">🏆 Achievements</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mb-6 ">
              {[
                { title: "LeetCode 100 Days Badge", img: "/assets/LC.png" },
                { title: "Solar System Project(Got 3rd Rank)", img: "/assets/ss.png" },
                { title: "Hacker Rank Java 5 Star ", img: "/assets/JAVA.png" },
                { title: "Github Pull Shark Badge", img: "/assets/GIT HUB.png" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-4 rounded-lg flex items-center gap-4"
                  whileHover={{ scale: 1.03 }}
                >
                  <img src={item.img} alt={item.title} className="w-20 h-20 rounded-lg" />
                  <p className="text-lg">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {activeSection === "Certificates" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">📜 Certificates</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4">
              {[
                { title: "Infosys - Complete Web Development", img: "/assets/Screenshot 2025-02-16 154412.png" },
                { title: "Full-Stack MERN", img: "/assets/Screenshot 2025-02-16 154257.png" },
                { title: "Software Engineering Job Simmulation", img: "/assets/Screenshot 2025-02-16 154529.png" },
                { title: "Walmart Advance Software Engineering Job simulation", img: "/assets/Screenshot 2025-02-16 154510.png" },
                { title: "Hacker Rank - JAVA", img: "/assets/Screenshot 2025-02-16 154437.png" },
                { title: "TATA - Data Visualisation", img: "/assets/Screenshot 2025-02-16 154326.png" },
                { title: "Game Development in JAVA", img: "/assets/Screenshot 2025-02-16 154346.png" },
                { title: "Accenture-Developer and Technology simulation", img: "/assets/Screenshot 2025-02-16 154151.png" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700 p-3 rounded-lg text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <img src={item.img} alt={item.title} className="w-full h-28 object-cover rounded-lg mb-2" />
                  <p className="text-sm font-medium">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Work Experience Section */}
        {activeSection === "Work Experience" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">💼 Work Experience</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Work Experience 1 */}
              <motion.div
                className="bg-gray-700 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-medium">Full-Stack Developer</h3>
                <p className="text-sm text-gray-300">SkillRisers | Aug 2024 - Present</p>
                <p className="mt-2 text-gray-400">
                  Developed dynamic web applications using MERN stack. Use 
                  REST APIs and worked on optimized front-end performance.
                </p>
              </motion.div>

              {/* Work Experience 2 */}
              <motion.div
                className="bg-gray-700 p-4 rounded-lg shadow-lg"
                whileHover={{ scale: 1.03 }}
              >
                <h3 className="text-lg font-medium">Web develeopment Work shop</h3>
                <p className="text-sm text-gray-300">Workshop | nov 2025 - dec 2024</p>
                <p className="mt-2 text-gray-400">
                  Learned more about Forent end Development.
                  And what is Web Hosting.
                </p>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
      
    </div>
  );
};

export default Wca;
