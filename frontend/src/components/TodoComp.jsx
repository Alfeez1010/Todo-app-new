import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from './redux/actions';
import React from 'react';
import DeleteIcon from './deleteIcon';

const TodoComp = ({ todos }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todos.data);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    setEditing((prevState) => !prevState);
    dispatch(updateTodo(todos._id, text));
  };

  const [confirm, setConfirm] = useState(false);

  return (
    <div>
      <div>
        {confirm && (
          <DeleteIcon setConfirm={setConfirm} todos={todos} key={todos._id} />
        )}
      </div>
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
          onClick={() => {
            setConfirm(true);
          }}
          // onClick={() => dispatch(deleteTodo(todos._id))}
        >
          <i className="fas fa-trash" />
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
    </div>
  );
};

export default TodoComp;
