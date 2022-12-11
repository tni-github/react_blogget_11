import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './commentsAction';

const initialState = {
  post: [],
  comments: [],
  error: '',
  status: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = '';
      state.status = 'loaded';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.error = action.error;
      state.status = 'error';
    },
  },
});


export default commentsSlice.reducer;
