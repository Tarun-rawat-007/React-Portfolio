import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <>
      <motion.div className="min-h-screen bg-gray-900 text-white" id="home" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ duration: 0.5 }} >
        {/* Navbar */}
        <nav className="flex flex-wrap justify-between items-center px-6 py-4 bg-gray-800 shadow-lg" >
  {/* Portfolio Title */}
  <motion.h1 
    className="text-2xl font-bold text-blue-400" 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    My Portfolio
  </motion.h1>

  {/* Navigation Links */}
  <ul className="flex flex-wrap items-center gap-6 text-lg">
    <motion.li 
      className="relative group" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      <a href="#home" className="relative text-white px-4 py-2 transition-transform duration-300 ease-in-out group-hover:scale-105">
        Home
        <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-blue-400 opacity-20 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
      </a>
    </motion.li>

    

    <motion.li 
      className="relative group" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <a href="#about" className="relative text-white px-4 py-2 transition-transform duration-300 ease-in-out group-hover:scale-105">
        About
        <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-blue-400 opacity-20 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
      </a>
    </motion.li>

    <motion.li 
      className="relative group" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <a href="#projects" className="relative text-white px-4 py-2 transition-transform duration-300 ease-in-out group-hover:scale-105">
        Projects
        <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-blue-400 opacity-20 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
      </a>
    </motion.li>

    <motion.li 
      className="relative group" 
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <a href="#contact" className="relative text-white px-4 py-2 transition-transform duration-300 ease-in-out group-hover:scale-105" >
        Contact
        <span className="absolute inset-0 -z-10 scale-0 rounded-full bg-blue-400 opacity-20 transition-transform duration-300 ease-in-out group-hover:scale-100"></span>
      </a>
    </motion.li>

    {/* Login Button */}
    <motion.li 
      className="ml-4" 
      initial={{ opacity: 0, scale: 0.8 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <button className="px-5 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-md shadow-blue-500/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-indigo-500/60 hover:bg-gradient-to-l hover:from-indigo-600 hover:to-blue-500">
        Login
      </button>
    </motion.li>
  </ul>
</nav>


        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between px-10 py-15">
          {/* Left Content */}
          <motion.div className="max-w-lg text-center md:text-left" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl font-extrabold mb-4">Personal Portfolio</h1>
            <h1 className="text-5xl font-extrabold mb-4">
              Hi, Im <span className="text-blue-500"><ReactTyped strings={["   Tarun   Rawat  !!"]} typeSpeed={80} loop showCursor={false} /></span>
            </h1>
            <p className="text-lg text-gray-300 mb-6 py-4">
              I’m a passionate <span className="text-blue-400 font-semibold">Full-Stack Web Developer </span>
              who loves building interactive and dynamic web applications.
            </p>

            {/* CTA Buttons */}
            <motion.div className="flex justify-center md:justify-start gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
              <a href="https://www.linkedin.com/in/tarun-rawat-650401250/" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all">Get in Touch</a>
              <a href="https://github.com/Tarun-rawat-007/Documents/blob/main/Int_resume.pdf" download className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all">Download Resume</a>
            </motion.div>
          </motion.div>

          {/* Right Side - SVG Image */}
          <motion.div className="w-full md:w-1/2 flex justify-center" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <img src="https://sopostech.com/assets/img/service3.gif" alt="Web Development" className="w-full md:w-[400px] lg:w-[500px] xl:w-[600px]" />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
