import { Box } from '@mui/material';
import React from 'react';
import { getAllTodos } from './redux/actions/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoComp from './TodoComp';

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);
  return (
    <Box
      sx={{
        margin: '38px',
        width: {
          xl: '1450px',
          lg: '1200',
          md: '1000',
          sm: '700',
          xs: '400',
        },
        border: '2px black solid',
        backgroundColor: '#ddede1',
      }}
    >
      <div>
        <article>
          <ul>
            {todos.map((todos) => (
              <TodoComp key={todos._id} todos={todos} />
            ))}
          </ul>
        </article>
      </div>
    </Box>
  );
};

export default Todos;
