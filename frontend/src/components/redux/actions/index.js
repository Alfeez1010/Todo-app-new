import axios from 'axios';
import {
  ADDNEW_TODO,
  GETALL_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  TOGGLE_TAB,
} from './type';
// const API_URL = 'http://localhost:8000';

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8000/todos `, { data });
    dispatch({ type: ADDNEW_TODO, payload: res.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTodos = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/todos`);
    dispatch({ type: GETALL_TODO, payload: res.data });
  } catch (error) {
    console.log('error while calling API', error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:8000/todos/${id} `);
    dispatch({ type: TOGGLE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while calling API', error.message);
  }
};

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`http://localhost:8000/todos/${id}`, { data });
    dispatch({ type: UPDATE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while calling update todo', error.message);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`http://localhost:8000/todos/${id}`);
    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log('error while calling delet todo', error.message);
  }
};

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, filter: tab });
};
