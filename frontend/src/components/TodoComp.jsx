import { color } from '@mui/system';
import express from 'express';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo } from './redux/actions';
import React from 'react';
const TodoComp = ({ todos }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todos.data);

  const dispatch = useDispatch();
  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todos._id))}
      style={{
        textDecoration: todos.done ? 'line-through' : '',
        color: todos.done ? '#bdc3c7' : '#34495e',
      }}
    >
      <span style={{ display: editing ? 'none' : '' }}>{todos.data}</span>
      <span className="icon">
        <i className="fas fa-trash" />
      </span>
      <form style={{ display: editing ? 'inline' : 'none' }}>
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <i className="fas fa-pen" />
      </span>
    </li>
  );
};

export default TodoComp;
