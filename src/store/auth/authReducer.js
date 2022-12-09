import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCESS
} from './authAction';

const initialState = {
  loading: '',
  data: {},
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: 'loading',
        error: '',
      };

    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: 'loaded',
        data: action.data,
        error: '',
      };

    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: 'error',
        error: action.error,
      };

    case AUTH_LOGOUT:
      return {
        ...state,
        data: {},
        loading: '',
        error: '',
      };

    default:
      return state;
  }
};
