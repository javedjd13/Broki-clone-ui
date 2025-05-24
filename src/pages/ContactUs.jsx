import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    outletType: "",
    location: "",
    brand: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="relative w-full h-[500px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7001.718189637755!2d77.17111969389337!3d28.640687542242993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d030a0ba60ad3%3A0xb133f70c4e0e6c06!2sBroki%20Services%20Private%20Limited!5e0!3m2!1sen!2sin!4v1716560000000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4">
          <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md z-10">
            <h2 className="text-lg font-semibold mb-4">
              Have questions? Get in touch!
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email ID"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Outlet Type
                </label>
                <select
                  name="outletType"
                  value={formData.outletType}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select...</option>
                  <option value="Dine-In">Dine-In</option>
                  <option value="Takeaway">Takeaway</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  <option value="">Select...</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Brand Name
                </label>
                <input
                  type="text"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  placeholder="E.g. Flashback Cafe Or NA"
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 rounded"
              >
                Submit ↗
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-bold">
          We’d Love To Hear From You.
        </h2>
        <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
          We are here to answer any question you may have. Let’s start the
          conversation and make something amazing together!
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
