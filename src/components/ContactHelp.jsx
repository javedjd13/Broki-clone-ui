import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const ContactHelp = () => {
  return (
    <div className="mt-16 bg-gray-100 py-10 px-6 rounded-xl text-left md:flex md:items-center md:justify-between md:px-12">
      
      {/* Left Section - Animate from Right to Left */}
      <motion.div
        className="mb-6 md:mb-0"
        initial={{ opacity: 0, x: 50 }} // 👈 right se start
        whileInView={{ opacity: 1, x: 0 }} // 👈 0 pe aake stop
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Need help? Talk to our expert.
        </h3>
        <p className="text-sm text-gray-700">
          Talk to our experts or Browse through more properties.
        </p>
      </motion.div>

      {/* Right Section - Animate from Left to Right */}
      <motion.div
        className="flex flex-col sm:flex-row sm:items-center gap-4"
        initial={{ opacity: 0, x: -50 }} // 👈 left se start
        whileInView={{ opacity: 1, x: 0 }} // 👈 0 pe stop
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button className="flex items-center justify-center border border-gray-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          Contact Us
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-sm ml-2"
          />
        </button>
        <div className="flex items-center bg-black text-white px-4 py-2 rounded-full text-sm font-semibold justify-center">
          +(91) 964 353 1845
        </div>
      </motion.div>
    </div>
  );
};

export default ContactHelp;
