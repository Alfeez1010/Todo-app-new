/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Input, Typography } from '@mui/material';
import { addNewTodo } from './redux/actions';
import { useDispatch } from 'react-redux';

const Banner = () => {
  const [text, setText] = useState();

  const dispatch = useDispatch();

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTodo(text));

    setText('');
  };

  return (
    <Box
      sx={{
        width: {
          xl: '1480px',
          lg: '1200',
          md: '1000',
          sm: '700',
          xs: '400',
        },
      }}
    >
      <Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontFamily: 'roboto',
              fontWeight: '450',
              marginTop: '0px',
              margin: '10px',
            }}
          >
            Todo List
          </Typography>

          <Box
            sx={{
              margin: '38px',
              height: '150px',
              marginTop: '1px',
              border: '2px black solid',
              backgroundColor: '#ddede1',
            }}
          >
            <form className="form" onSubmit={onFormSubmit}>
              <Input
                sx={{ width: '400px', margin: '45px' }}
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
              />
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
