import mongoose from 'mongoose';

let isConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri || mongoUri.trim() === '') {
    console.warn('⚠️  MONGO_URI not provided. Server will operate using in-memory data store.');
    return false;
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return true;
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    console.warn('⚠️  Falling back to in-memory store.');
    isConnected = false;
    return false;
  }
};

export const getDbStatus = () => isConnected;
