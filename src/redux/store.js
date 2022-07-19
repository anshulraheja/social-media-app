
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import postModalReducer from './reducers/postModalSlice';
import postReducer from './reducers/postsSlice';
import userReducer from './reducers/usersSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        postModal: postModalReducer,
        posts: postReducer,
        users: userReducer,
    },
});