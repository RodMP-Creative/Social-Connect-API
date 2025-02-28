import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialConnect', {
}).then(() => {
  console.log('Successfully connected');
}).catch((error) => {
  console.error('Error connecting:', error);
});

export default mongoose.connection;
