import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20" >
      <motion.h1 
        className="text-5xl font-extrabold font-serif text-center mb-10" id="about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      {/* Top Card - Personal Information */}
      <motion.div 
        className="w-full max-w-4xl bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start text-center md:text-left mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Content (Text) */}
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold text-blue-400">Tarun Rawat</h1>
          <p className="text-lg mt-2">Date of Birth: 28 July 2003</p>
          <p className="text-lg">Gender: Male</p>
          <p className="text-lg">Address: KathBangla, SD road, Shastradhara, Dehradun, Uttarakhand</p>
          <p className="text-lg">Languages: English, Hindi</p>
        </div>

        {/* Right Content (Image) */}
        <motion.div 
          className="md:w-1/3 flex justify-center mt-3 md:mt-0"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src="/assets/profilepng.png" 
            alt="Tarun Rawat" 
            className="w-52 h-52 rounded-full border-4 border-blue-400 shadow-lg transition-transform duration-500 hover:scale-110 hover:shadow-blue-400 hover:shadow-2xl"
          />
        </motion.div>
      </motion.div>

      {/* Education Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
        {[{ title: "Class 10", school: "PYDS Learning Academy", year: "2020", percentage: "82.6" },
          { title: "Class 12", school: "PYDS Learning Academy", year: "2022", percentage: "75.8" },
          { title: "BCA", school: "DIT University", year: "Third Year", percentage: "CGPA: 9.48" }].map((edu, index) => (
          <motion.div 
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center transition-all duration-300 hover:scale-105 hover:bg-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold text-blue-400">{edu.title}</h2>
            <p className="mt-2">School: {edu.school}</p>
            <p>Year: {edu.year}</p>
            <p>{edu.percentage}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
