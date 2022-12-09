import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsRequestAsync } from '../store/popularPosts/popularPostsAction';

export const usePopularPosts = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const popularPosts = useSelector(state => state.posts.popularPosts);
  const postLoading = useSelector(state => state.posts.postLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [popularPosts, postLoading];
};

