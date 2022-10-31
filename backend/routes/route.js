import express from 'express';
import { addTodo, toggleTodoDone } from '../controller/todo-controller.js';
import { getAllTodos } from '../controller/todo-controller.js';

const Routes = express.Router();

Routes.post('/todos', addTodo);
Routes.get('/todos', getAllTodos);
Routes.get('/todos/:id', toggleTodoDone);

export default Routes;
