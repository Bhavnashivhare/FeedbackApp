import React, { useState } from "react";
import axios from "axios";

export default function FeedbackForm({ onFeedbackSubmitted }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://feedback-backend-jxvl.onrender.com/feedback", form);
      setForm({ name: "", email: "", message: "" });
      setSuccess(true);
      onFeedbackSubmitted();
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Submit failed", err);
    }
  };

  return (
    <div className="w-full max-w-xl bg-white bg-opacity-10 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-xl">
      <h2 className="text-2xl font-semibold mb-6 text-center text-blue-300">📨 We Value Your Feedback</h2>
      {success && (
        <div className="mb-4 text-green-400 text-center">✅ Feedback submitted successfully!</div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1">Your Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full bg-gray-800 border border-gray-600 text-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg"
        >
          🚀 Submit Feedback
        </button>
      </form>
    </div>
  );
}