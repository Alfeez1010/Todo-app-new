import mongoose from 'mongoose';

export const Connection = () => {
  const MONGODB_URI = 'mongodb://localhost:27017';
  mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on('connected', () => {
    console.log('database connected');
  });
  mongoose.connection.on('disconnected', () => {
    console.log('database disconnected');
  });
};
export default Connection;
