import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-1">
      <div className="container mx-auto px-10 grid grid-cols-1 m-4 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Quick Links */}
        <div>
          <motion.h2 
            className="text-xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Quick Links
          </motion.h2>
          <ul className="space-y-2">
            {["Home", "Projects", "About", "Contact"].map((link, index) => (
              <li key={index} >
                <a href="#" className="relative inline-block text-re-300 transition-all duration-300 rounded-full hover:bg-blue-500 hover:text-white px-8">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <motion.h2 
            className="text-xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            Follow Me On
          </motion.h2>
          <div className="flex flex-col space-y-2">
            {[
              { name: "Instagram", url: "https://instagram.com/", img: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png" },
              { name: "LinkedIn", url: "https://www.linkedin.com/in/tarun-rawat-650401250/", img: "https://cdn-icons-png.flaticon.com/512/174/174857.png" },
              { name: "GitHub", url: "https://github.com/Tarun-rawat-007", img: "https://cdn-icons-png.flaticon.com/512/25/25231.png" },
              { name: "Facebook", url: "https://www.facebook.com/tarun.prime", img: "https://cdn-icons-png.flaticon.com/512/124/124010.png" }
            ].map((social, index) => (
              <motion.a 
                key={index}
                href={social.url} 
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition"
                whileHover={{ scale: 1.1, rotate: -2 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img 
                  src={social.img} 
                  alt={social.name} 
                  className="w-5 h-5"
                />
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <motion.h2 
            className="text-xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          >
            Contact Me
          </motion.h2>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Email: 
            <motion.a 
              href="mailto:rawatt179@gmail.com" 
              className="text-blue-400 hover:underline transition-all duration-300"
              whileHover={{ scale: 1.1, color: "#60a5fa" }}
            >  rawatt179@gmail.com</motion.a>
          </motion.p>
          <motion.p 
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Phone:  
            <motion.span 
              className="text-blue-400 hover:text-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
            >  +91-9045518164</motion.span>
          </motion.p>
        </div>
      </div>

      {/* Copyright */}
      <motion.div 
        className="text-center text-gray-500 text-sm mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        © {new Date().getFullYear()} Tarun Rawat. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
