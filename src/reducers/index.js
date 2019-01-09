import { combineReducers } from 'redux';
import postReducer from './postReducer';
import usersReducer from './usersReducer';
import streamReducer from './streamReducer';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
 

export default combineReducers({
    posts: postReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});

