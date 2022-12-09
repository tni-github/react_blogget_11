import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import { userCommentReducer } from './userCommentReducer';
import { popularPostsReducer } from './popularPosts/popularPostsReducer';
import thunk from 'redux-thunk';
import { authReducer } from './auth/authReducer';
import { commentsReducer } from './comments/commentsReducer';

const rootReducer = combineReducers({
  tokenReducer,
  userCommentReducer,
  posts: popularPostsReducer,
  auth: authReducer,
  commentsReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log('action: ', action);
//   next(action);
// };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);
