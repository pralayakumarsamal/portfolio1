
import { useState } from "react";

import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("button clicked");
    

    try {
      console.log("formData")
      const res = await axios.post(
        "https://portfolio1-backend-8gf1.onrender.com/api/contact",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );
      console.log(res.data);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
      

    }
  };

  return (
    <section
      id="contact"
      className="bg-[#020617] text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">
          Contact <span className="text-purple-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mb-14">
          Let's connect! Feel free to contact me for job opportunities,
          freelance projects, or collaborations.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">
                📧 Email
              </h3>
              <p className="text-gray-300 mt-2">
                pralayasamal486@gmail.com
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">
                📱 Phone
              </h3>
              <p className="text-gray-300 mt-2">
                +91 8917523863
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">
                📍 Location
              </h3>
              <p className="text-gray-300 mt-2">
                Bengaluru, Karnataka, India
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold text-purple-400">
                💼 Available For
              </h3>
              <p className="text-gray-300 mt-2">
                Full-Time MERN Stack Developer Roles | Freelance Projects
              </p>
            </div>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-purple-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-purple-500"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-purple-500"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800 p-4 rounded-xl outline-none border border-slate-700 focus:border-purple-500"
              required
            ></textarea>

            <button
              type="submit"
              className="bg-linear-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;