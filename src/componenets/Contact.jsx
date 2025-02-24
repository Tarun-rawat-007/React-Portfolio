import { motion } from "framer-motion";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [result, setResult] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ff6d03d0-d54a-48e2-b25a-3e94ef18f1c4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      toast.success("Form Submitted Successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error("Form Not Submitted!!", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white " id="contact">
      <motion.div
        className="mt-10 w-full max-w-lg bg-gray-800 p-8 rounded-2xl shadow-lg mb-20"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold text-blue-400 text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          Contact Me
        </motion.h2>

        <motion.form onSubmit={onSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <input type="hidden" name="access_key" value="Yff6d03d0-d54a-48e2-b25a-3e94ef18f1c4"></input>
          <motion.div className="mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <label className="block text-gray-300 mb-2">Name</label>
            <input
              type="text" name="name"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
              placeholder="Enter your name" required
            />
          </motion.div>

          <motion.div className="mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <label className="block text-gray-300 mb-2">Email</label>
            <input
              type="email" name="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </motion.div>

          <motion.div className="mb-4" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <label className="block text-gray-300 mb-2">Message</label>
            <textarea
              rows="4" name="message"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-400 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg font-bold text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>  
        </motion.form>
        <span className="px-6 py-1  font-semibold text-white bg-gradient-to-r">
  {result}<ToastContainer position="top-center" autoClose={3000} />
</span>

      </motion.div>
    </div>
  );
};

export default Contact;
