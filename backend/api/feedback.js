const mongoose = require("mongoose");

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  isConnected = true;
};

module.exports = async (req, res) => {
  await connectToDB();

  if (req.method === 'GET') {
    // return feedback list
  } else if (req.method === 'POST') {
    // save feedback
  }
};