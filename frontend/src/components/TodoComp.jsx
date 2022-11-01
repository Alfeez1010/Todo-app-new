import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo, updateTodo } from './redux/actions';
import React from 'react';
import DeleteIcon from './deleteIcon';
import './deleteIcon.css';

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
          style={{
            display: editing ? 'inline' : 'none',
            width: '300',
            height: '300',
            backgroundColor: '#fffff',
          }}
          onSubmit={onFormSubmit}
        >
          <div
            style={{
              width: '300px',
              height: '90px',
              backgroundColor: '#ddede1',
              borderRadius: ' 12px',
              border: ' black 2px',
              borderStyle: 'outset',
            }}
          >
            <input
              style={{
                marginTop: 'none',
                width: '100%',
                height: '50px',
                backgroundColor: '#ddede1',
                marginleft: '170px',

                borderRadius: ' 12px',
                border: ' black 2px',
                color: 'black',
                borderStyle: 'outset',
              }}
              type="text"
              value={text}
              className="edit-todo"
              onChange={(e) => setText(e.target.value)}
            />
            <div className="footer-style">
              <button
                className="button-edit"
                onClick={() => {
                  setConfirm(false);
                }}
                id="cancelBtn"
              >
                Cancel
              </button>

              <button className="button-edit" onClick={{ onFormSubmit }}>
                Edit
              </button>
            </div>
          </div>
        </form>
        <span
          className="icon"
          onClick={() => {
            setConfirm(true);
          }}
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
