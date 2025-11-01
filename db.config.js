// This file connects your Express server to MongoDB Atlas

const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;

  if (!MONGO_URI) {
    console.error('FATAL ERROR: MONGO_URI is not defined in environment variables.');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      // These options are standard best practices for Mongoose
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true, // No longer supported in recent versions
      // useFindAndModify: false // No longer supported in recent versions
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
