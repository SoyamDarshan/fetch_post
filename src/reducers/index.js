import {combineReducers} from 'redux';
import postReducers from './postReducers';
import userReducers from './usersReducers';

export default combineReducers ({
  posts: postReducers,
  users: userReducers,
});
