import React, { useState } from 'react';
import { motion } from 'framer-motion';

function ContactLeasing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    interest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you shortly.');
    setFormData({ name: '', email: '', company: '', message: '', interest: '' });
  };

  return (
    <motion.div
      className="w-full mt-20 p-8 lg:p-12 bg-primary-dark shadow-xl border-t border-gray-800"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.0 }}
    >
      <h2 className="font-serif text-4xl text-accent text-center mb-10">Partner With Us</h2>
      <p className="font-sans text-lg text-secondary-light text-center max-w-2xl mx-auto mb-12">
        Ready to elevate your brand's presence? Connect with our team to explore leasing opportunities,
        sponsorships, or event bookings at Evergreen Metropolis Mall.
      </p>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
          <label htmlFor="name" className="block font-sans text-sm text-gray-400 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 focus:border-accent outline-none text-secondary-light font-sans"
            required
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.3 }}>
          <label htmlFor="email" className="block font-sans text-sm text-gray-400 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 focus:border-accent outline-none text-secondary-light font-sans"
            required
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.4 }}>
          <label htmlFor="company" className="block font-sans text-sm text-gray-400 mb-2">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 focus:border-accent outline-none text-secondary-light font-sans"
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }}>
          <label htmlFor="interest" className="block font-sans text-sm text-gray-400 mb-2">I am interested in...</label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full p-3 bg-gray-900 border border-gray-700 focus:border-accent outline-none text-secondary-light font-sans appearance-none"
            required
          >
            <option value="">Select an option</option>
            <option value="retail_leasing">Retail Leasing</option>
            <option value="sponsorship">Sponsorship & Partnerships</option>
            <option value="event_booking">Event Booking</option>
            <option value="other">Other Inquiry</option>
          </select>
        </motion.div>
        <motion.div className="md:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.6 }}>
          <label htmlFor="message" className="block font-sans text-sm text-gray-400 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 bg-gray-900 border border-gray-700 focus:border-accent outline-none text-secondary-light font-sans resize-y"
            required
          ></textarea>
        </motion.div>
        <motion.div className="md:col-span-2 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.7 }}>
          <motion.button
            type="submit"
            className="px-8 py-3 bg-accent text-primary-dark font-sans text-lg uppercase tracking-wider hover:bg-opacity-90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Inquiry
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}

export default ContactLeasing;