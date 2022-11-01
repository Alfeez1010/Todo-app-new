import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from './redux/actions';
import React from 'react';
import Box from '@mui/material/Box';

const TodoComp = ({ todos }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todos.data);

  const dispatch = useDispatch();
  const deleteIcon = () => {
    <Box
      sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      console.log('object');
    </Box>;
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todos._id, text));
  };

  return (
    <li
      className="task"
      onClick={() => dispatch(toggleTodo(todos._id))}
      style={{
        textDecoration: todos?.done ? 'line-through' : '',
        color: todos?.done ? '#bdc3c7' : '#34495e',
      }}
      data-testid="todos-test"
    >
      <span style={{ display: editing ? 'none' : '' }}>{todos?.data}</span>

      <form
        style={{ display: editing ? 'inline' : 'none' }}
        onSubmit={onFormSubmit}
      >
        <input
          type="text"
          value={text}
          className="edit-todo"
          onChange={(e) => setText(e.target.value)}
        />
      </form>
      <span
        className="icon"
        //  onClick={() => dispatch(deleteTodo(todos._id))}
      >
        <button>
          <i className="fas fa-trash" />
        </button>
      </span>
      <span
        className="icon"
        onClick={() => setEditing((prevState) => !prevState)}
      >
        <button>
          <i className="fas fa-pen" />
        </button>
      </span>
    </li>
  );
};

export default TodoComp;
