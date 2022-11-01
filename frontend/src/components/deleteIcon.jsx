import React from 'react';
import { useDispatch } from 'react-redux';
import './deleteIcon.css';
import { deleteTodo } from './redux/actions';

const DeleteIcon = ({ todos, setConfirm }) => {
  console.log(todos._id);
  const dispatch = useDispatch();
  return (
    <div className="modalContainer">
      <div className="titleCloseBtn"></div>
      <div className="title">
        <h1 style={{ fontSize: '20px', color: 'black' }}>
          Are You Sure You Want to Delete?
        </h1>
      </div>

      <div className="footer">
        <button
          onClick={() => {
            setConfirm(false);
          }}
          id="cancelBtn"
        >
          Cancel
        </button>

        <button onClick={() => dispatch(deleteTodo(todos._id))}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteIcon;
