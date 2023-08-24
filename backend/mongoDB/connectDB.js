import mongoose from 'mongoose';

const connectDB = async () => {
  console.log(process.env.DB_URL);
  try {
    const connect = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
    });
    console.log('connected to database');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
