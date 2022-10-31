import { Box } from '@mui/material';
import React from 'react';
import { getAllTodos, deleteTodo } from './redux/actions/index';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoComp from './TodoComp';
import Tabs from './Tab';
import { ALL_TODOS, DONE_TODOS, ACTIVE_TODOS } from './redux/actions/type';

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  const getTodo = () => {
    if (currentTab === ALL_TODOS) {
      return todos;
    } else if (currentTab === ACTIVE_TODOS) {
      return todos.filter((todo) => !todo.done);
    } else if (currentTab === DONE_TODOS) {
      return todos.filter((todo) => todo.done);
    }
  };
  const removeDoneTodos = () => {
    todos.forEach(({ done, _id }) => {
      if (done) {
        dispatch(deleteTodo(_id));
      }
    });
  };

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
          <div>
            <Tabs currentTab={currentTab} />
            {todos.some((todo) => todo.done) ? (
              <button onClick={removeDoneTodos} className="button clear">
                Remove Done Todos
              </button>
            ) : null}
          </div>
          <ul>
            {getTodo().map((todos) => (
              <TodoComp key={todos._id} todos={todos} />
            ))}
          </ul>
        </article>
      </div>
    </Box>
  );
};

export default Todos;
