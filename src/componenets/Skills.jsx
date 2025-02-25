import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: "https://img.icons8.com/?size=48&id=20909&format=png" },
    { name: "CSS", icon: "https://img.icons8.com/?size=48&id=7gdY5qNXaKC0&format=png" },
    { name: "JavaScript", icon: "https://img.icons8.com/?size=48&id=PXTY4q2Sq2lG&format=png" },
    { name: "React", icon: "https://img.icons8.com/?size=40&id=Nlsua06Gvxel&format=png" },
    { name: "Node.js", icon: "https://img.icons8.com/?size=48&id=54087&format=png" },
    { name: "Git", icon: "https://img.icons8.com/?size=48&id=20906&format=png" },
    { name: "GitHub", icon: "https://img.icons8.com/?size=50&id=12599&format=png" },
    { name: "Java", icon: "https://img.icons8.com/?size=48&id=13679&format=png" },
    { name: "C", icon: "https://img.icons8.com/?size=48&id=40670&format=png" },
    { name: "Python", icon: "https://img.icons8.com/?size=48&id=l75OEUJkPAk4&format=png" },
    { name: "MySQL", icon: "https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png" },
    { name: "MongoDb", icon: "https://img.icons8.com/?size=48&id=bosfpvRzNOG8&format=png" },
];

const Skills = () => {
    return (
        <section className="p-10 bg-gray-900 text-white">
            <div className="container mx-auto px-10 text-center">
                <motion.h2
                    className="text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    My Skills
                </motion.h2>

                {/* Horizontal Scrolling Section */}
                <div className="overflow-hidden relative px-10">
                    <motion.div
                        className="flex gap-8 animate-marquee"
                        style={{ animationDuration: "20s", whiteSpace: "nowrap" }}
                        initial={{ x: "10%" }}
                        animate={{ x: "-200%" }} // Move further for smoother looping
                        transition={{ ease: "linear", duration: window.innerWidth < 768 ? 5 : 10, repeat: Infinity }}
                    >
                        {[...skills, ...skills].map((skill, index) => (
                           <div
                           key={index}
                           className="group p-1 bg-gray-800 rounded-lg shadow-lg flex-shrink-0 w-24 h-24 overflow-hidden"
                       >
                           <div
                               className="flex flex-col items-center justify-center w-full h-full transition-transform duration-300 group-hover:scale-110"
                           >
                               {/* Skill Icon */}
                               <div className="mb-2 h-12 flex items-center justify-center">
                                   <img
                                       src={skill.icon}
                                       alt={skill.name}
                                       className="w-12 h-12 object-contain transition-transform duration-300 group-hover:rotate-6"
                                   />
                               </div>
                               {/* Skill Name */}
                               <h3 className="text-xs font-semibold text-gray-300">{skill.name}</h3>
                           </div>
                       </div>
                       
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Keyframes for Continuous Animation */}
            <style>
    {`
        @keyframes marquee {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }

        .animate-marquee {
            animation: marquee linear infinite;
            animation-duration: 20s; /* Default speed for laptops */
        }

        @media (max-width: 768px) {
            .animate-marquee {
                animation-duration: 10s; /* Faster animation on smaller screens */
            }
        }

        @media (max-width: 480px) {
            .animate-marquee {
                animation-duration: 3s; /* Even faster for mobile devices */
            }
        }
    `}
</style>

        </section>
    );
};

export default Skills;
