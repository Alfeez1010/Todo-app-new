import { request } from 'express';
import todo from '../model/todo.js';

export const addTodo = async (request, response) => {
  try {
    const newTodo = await todo.create({
      data: request.body.data,
      createdAt: Date.now(),
    });
    await newTodo.save();

    response.status(200).json(newTodo);
  } catch (error) {
    return response.status(200).json(error.message);
  }
};

export const getAllTodos = async (request, response) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });

    response.status(200).json(todos);
  } catch (error) {
    return response.status(200).json(error.message);
  }
};

export const toggleTodoDone = async (request, response) => {
  try {
    const todoRef = await todo.findById(request.params.id);
    const todoSave = await todo.findOneAndUpdate(
      { _id: request.params.id },
      { done: !todoRef.done }
    );
    await todoSave.save();

    response.status(200).json(todoSave);
  } catch (error) {
    return response.status(200).json(error.message);
  }
};
