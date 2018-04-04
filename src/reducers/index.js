import { combineReducers } from 'redux';

import BookReducer from './reducerBooks';
import ActiveBook from './reducerActiveBook';

const rootReducer = combineReducers({
  books: BookReducer,
  activeBook: ActiveBook,
});

export default rootReducer;
