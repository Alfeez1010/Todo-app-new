import express from 'express';
import {
  addTodo,
  deleteTodo,
  toggleTodoDone,
  updateTodo,
} from '../controller/todo-controller.js';
import { getAllTodos } from '../controller/todo-controller.js';

const Routes = express.Router();

Routes.post('/todos', addTodo);
Routes.get('/todos', getAllTodos);
Routes.get('/todos/:id', toggleTodoDone);
Routes.put('/todos/:id', updateTodo);
Routes.delete('/todos/:id', deleteTodo);

export default Routes;
