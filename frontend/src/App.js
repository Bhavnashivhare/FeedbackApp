import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";

function App() {
  const [reload, setReload] = useState(false);

  return (
   
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex flex-col items-center px-4 py-10">
  <h1 className="text-4xl font-bold mb-10 text-blue-400 drop-shadow-lg">🌟 Share Your Feedback</h1>
  <FeedbackForm onFeedbackSubmitted={() => setReload(!reload)} />
  <FeedbackList key={reload} />
</div>
  );
}

export default App;
