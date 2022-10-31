import mongoose from 'mongoose';

const todoScheme = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const todo = mongoose.model('todo', todoScheme);
export default todo;
