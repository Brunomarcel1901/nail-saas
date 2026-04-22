import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingPage() {
  const [form, setForm] = useState({
    name: "", email: "", date: "", time: "", style: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">

      <motion.div 
        initial={{opacity:0, scale:0.95}}
        animate={{opacity:1, scale:1}}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >

        <h2 className="text-2xl font-bold text-center mb-6">
          Book Nail Appointment 💅
        </h2>

        <div className="space-y-4">

          <input name="name" placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"/>

          <input name="email" placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-400"/>

          <input type="date" name="date"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"/>

          <input type="time" name="time"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"/>

          <select name="style"
            onChange={handleChange}
            className="w-full p-3 border rounded-lg">

            <option value="">Select Style</option>
            <option>Classic</option>
            <option>Luxury</option>
            <option>Art</option>
          </select>

          <button className="w-full bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition">
            Pay & Book
          </button>

        </div>

      </motion.div>
    </div>
  );
}
