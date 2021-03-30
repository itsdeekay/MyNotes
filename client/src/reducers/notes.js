  
import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes';

export default (todos = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...todos, action.payload];
    case UPDATE:
      return todos.map((todo) => (todo._id === action.payload._id ? action.payload : todo));
    case DELETE:
      return todos.filter((todo) => todo._id !== action.payload);
    default:
      return todos;
  }
};