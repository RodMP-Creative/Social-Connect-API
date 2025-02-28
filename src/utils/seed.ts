import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Thought from '../models/Thought.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialConnect');

    await User.deleteMany({});
    await Thought.deleteMany({});

    const users = await User.insertMany([
      { username: 'user1', email: 'user1@example.com' },
      { username: 'user2', email: 'user2@example.com' },
    ]);

    const thoughts = await Thought.insertMany([
      { thoughtText: 'thought by user1', userName: users[0].username },
      { thoughtText: 'thought by user2', userName: users[1].username },
    ]);

    await User.findByIdAndUpdate(users[0]._id, { $push: { thoughts: thoughts[0]._id } });
    await User.findByIdAndUpdate(users[1]._id, { $push: { thoughts: thoughts[1]._id } });

    console.log('Database seeded');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding:', err);
    mongoose.connection.close();
  }
};

seedData();
