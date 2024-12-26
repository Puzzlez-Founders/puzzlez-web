import { MongoClient } from 'mongodb';

// Replace this URL with your MongoDB connection string (in this case, local MongoDB)
const client = new MongoClient('mongodb://localhost:27017/employee', {});

export const connectToDatabase = async () => {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to local MongoDB database!');
    return client.db(); // Returns the connected database instance
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
};
