import { motion } from "framer-motion";
const projects = [
    {
      name: "Hotel Mangement System",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsJTIwJTIwYm9va2luZyUyMG1hbmdlbWVudHxlbnwwfHwwfHx8MA%3D%3D",  // Replace with your actual image URL
      details: "This is hotel Mangement application used to book rooms ",
      tech: "JAVA, Awt-Swings, MySQL",
      link: "https://github.com/Tarun-rawat-007/Hotel_Management",  // GitHub Repo Link
    },
    {
      name: "Personal PortFolio",
      image: "https://media.istockphoto.com/id/1425118012/photo/businessman-briefcase-or-schoolbag-education-learning-business-finance.webp?a=1&b=1&s=612x612&w=0&k=20&c=f13VQkln8_Yr0ehOGKQBx8HWwauD9Vvy-uY1WTTOB1A=",  // Replace with your actual image URL
      details: "This is My Personal Portfolio Project.",
      tech: "React, Taiwind, Node.js-npm",
      link: "https://github.com/Tarun-rawat-007/myportfoliogithub.io?tab=readme-ov-file",  // GitHub Repo Link
    },
    {
      name: "Solar System",
      image: "https://plus.unsplash.com/premium_photo-1717774172640-b7d9a3192c5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U29sYXIlMjBzeXRlbXxlbnwwfHwwfHx8MA%3D%3D",  // Replace with your actual image URL
      details: "This is a Staic Project that Contains Information of Solar System ",
      tech: "Html, css, javascript",
      link: "https://github.com/Tarun-rawat-007/solar-system-",  // GitHub Repo Link
    },
    {
      name: "Generative Ai Calculator",
      image: "https://media.istockphoto.com/id/1782025767/photo/growing-generative-ai.webp?a=1&b=1&s=612x612&w=0&k=20&c=BtLIriqMvt_Gg0FMQn8yTlDeWRDZ1k7KKcdAWxKI8TM=",  // Replace with your actual image URL
      details: "This is a Python Project in Which ai helps User for daily life Calculation ",
      tech: "Python, Flask, Web3",
      link: "https://github.com/Tarun-rawat-007/Falsk_Gen-Calculator",  // GitHub Repo Link
    },
    // Add more projects as needed
  ];
  
  const ProjectsSection = () => {
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-10 text-center" id="projects">
        <motion.h2
                    className="text-4xl font-bold mb-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    My Projects
                </motion.h2>
  
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
           initial="hidden"
           whileInView="visible"
           viewport={{ once: false, amount: 0.2 }} // Triggers every time on scroll
           variants={{
               hidden: { opacity: 0, y: 50 },
               visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
           }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} className="group relative bg-gray-800 rounded-lg shadow-lg overflow-hidden" variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                            }}
                            whileHover={{ scale: 1.05 }}
             
              >
                {/* Project Image */}
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
  
                {/* Project Details */}
                <div className="p-6 flex flex-col justify-between h-full relative z-10">
                  <h3 className="text-1.8xl font-bold mb-4">{project.name}</h3>
                  <p className="text-sm mb-4">{project.details}</p>
                  <p className="text-xs font-semibold mb-4">{project.tech}</p>
                 
  
                  {/* GitHub Repo Link */}
                  <div className="text-xs font-semibold "> 

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline cursor-pointer"
                    >
                     <p className="text-xs font-semibold mb-0">{project.link}</p>
                    </a>
                  </div>
                  
  
                  {/* View Project Link */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline cursor-pointer mt-auto"
                    style={{ zIndex: 2 }} // Ensures it's above any overlapping elements
                  >
                    View Project
                  </a>
                </div>
  
                {/* Hover Effect (Glow) only on Image */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-opacity-20 group-hover:bg-gray-700 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
       
      </section>
    );
  };
  
  export default ProjectsSection;
   