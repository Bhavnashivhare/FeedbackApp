import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserCircle, FaRegClock, FaEnvelopeOpenText } from "react-icons/fa";

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/feedback");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-blue-300 mb-8 text-center drop-shadow">
        ✨ Submitted Feedback
      </h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-400 text-center italic">No feedback submitted yet.</p>
      ) : (
        <div className="space-y-6">
          {feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="bg-white bg-opacity-5 backdrop-blur-md border border-gray-700 text-white rounded-xl p-6 shadow-lg hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaRegClock className="text-blue-300" />
                  {new Date(fb.timestamp).toLocaleString()}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <FaEnvelopeOpenText className="text-yellow-300" />
                  {fb.email}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <FaUserCircle className="text-3xl text-blue-500" />
                <h3 className="text-lg font-semibold text-white">{fb.name}</h3>
              </div>
              <p className="text-base text-gray-100 border-l-4 border-blue-400 pl-4 mt-2">
                {fb.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}