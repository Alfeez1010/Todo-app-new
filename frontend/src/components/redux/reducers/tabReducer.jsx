import * as actionTypes from '../actions/type';

export const tabReducer = (state = actionTypes.ALL_TODOS, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_TAB:
      return action.filter;
    default:
      return state;
  }
};
