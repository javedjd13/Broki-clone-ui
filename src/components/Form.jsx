import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { locationOptions, outletOptions } from "../lib/Constant";
import FormImg from "../assets/images/form.webp";

// Animation Variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const formVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Reusable Input Component
const TextInput = ({ label, name, value, onChange, placeholder, type = "text", required = false }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-semibold text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
    />
  </div>
);

// Reusable Select Component
const SelectInput = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="block text-xs font-semibold text-gray-700 mb-1">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value} disabled={value === ""}>
          {label}
        </option>
      ))}
    </select>
  </div>
);

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    outlet: "",
    location: "",
    brand: "",
    budget: "",
    size: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted with data:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    <motion.div
      className="w-full bg-[#f7f7f7] px-4 py-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2 className="text-2xl font-extrabold text-gray-900 mb-1 max-md:text-center" variants={formVariants}>
          LOOKING For something specific
        </motion.h2>
        <motion.p className="text-sm text-gray-700 mb-8 max-md:text-center" variants={formVariants}>
          Let us know. Our team will get it for you!
        </motion.p>

        <div className="flex flex-col lg:flex-row lg:space-x-16 items-center">
          {/* Form section animates from right */}
          <motion.form
            onSubmit={handleSubmit}
            className="flex-1 w-full space-y-6"
            noValidate
            variants={formVariants}
          >
            <TextInput label="Your Name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <TextInput label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Your Phone Number" required />
            <TextInput label="Email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your Email ID" required />
            <SelectInput label="Outlet Type" name="outlet" value={formData.outlet} onChange={handleChange} options={outletOptions} />
            <SelectInput label="Location" name="location" value={formData.location} onChange={handleChange} options={locationOptions} />
            <TextInput label="Brand Name" name="brand" value={formData.brand} onChange={handleChange} placeholder="E.g. Flashback Cafe Or NA" />
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/2">
                <TextInput label="Max Budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget" />
              </div>
              <div className="w-full md:w-1/2">
                <TextInput label="Min Size (Sq ft)" name="size" value={formData.size} onChange={handleChange} placeholder="Area Required" />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-md text-center flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Submit</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
            </button>
          </motion.form>

          {/* Image section animates from left */}
          <motion.div
            className="flex-1 mt-12 lg:mt-0 flex justify-center items-center"
            variants={imageVariants}
          >
            <img
              src={FormImg}
              alt="Man with headset illustration"
              className="max-w-full h-auto"
              width="600"
              height="400"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Form;
