import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/commentsAction';

export const useCommentsData = (id) => {
  const post = useSelector(state => state.commentsReducer.post);
  const comments = useSelector(state => state.commentsReducer.comments);
  const status = useSelector(state => state.commentsReducer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [id]);

  return [post, comments, status];
};

