import * as actionTypes from '../actions/type';

const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADDNEW_TODO:
      return [action.payload, ...state];
    case actionTypes.GETALL_TODO:
      return action.payload;
    case actionTypes.TOGGLE_TODO:
      return state.map((todos) =>
        todos._id === action.payload._id
          ? { ...todos, done: !todos.done }
          : todos
      );
    case actionTypes.UPDATE_TODO:
      return state.map((todos) =>
        todos._id === action.payload._id
          ? { ...todos, data: action.payload.data }
          : todos
      );
    case actionTypes.DELETE_TODO:
      return state.filter((todos) => todos._id !== action.payload._id);

    default:
      return state;
  }
};
export default todosReducers;
