import {
  POSTS_REQUEST,
  POSTS_REQUEST_SUCCESS,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS_AFTER,
  CHANGE_PAGE,
} from './popularPostsAction';

const initialState = {
  postLoading: '',
  popularPosts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const popularPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        postLoading: 'loading',
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        postLoading: 'loaded',
        popularPosts: action.popularPosts,
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POSTS_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        postLoading: 'loaded',
        popularPosts: [...state.popularPosts, ...action.popularPosts],
        error: '',
        after: action.after,
        isLast: !action.after,
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        postLoading: 'error',
        error: action.error,
      };

    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };

    default:
      return state;
  }
};
