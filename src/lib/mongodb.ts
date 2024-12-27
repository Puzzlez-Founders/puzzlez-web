import { MongoClient } from 'mongodb';

const MONGO_URI = 'mongodb://localhost:27017/employee'; // Ensure this matches your local MongoDB setup
let client: MongoClient | null = null;

export const connectToDatabase = async () => {
  try {
    if (!client) {
      client = new MongoClient(MONGO_URI, {});
      await client.connect();
      console.log('Connected to local MongoDB database!');
    }
    return client.db(); // Returns the connected database instance
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
};
