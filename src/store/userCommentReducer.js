const initialState = {
  comment: 'Привет Redux',
};

const UPDATE_USER_COMMENT = 'UPDATE_COMMENT';

export const updateUserComment = comment => ({
  type: UPDATE_USER_COMMENT,
  comment,
});

export const userCommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};
