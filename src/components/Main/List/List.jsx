import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useParams } from 'react-router-dom';
import { postsRequestAsync } from
  '../../../store/popularPosts/popularPostsAction';
import PreLoader from '../../../UI/PreLoader';
import { Text } from '../../../UI/Text';
import style from './List.module.css';
import Post from './Post';

export const List = () => {
  const popularPosts = useSelector(state => state.posts.popularPosts);
  const postLoading = useSelector(state => state.posts.postLoading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {popularPosts.map((postData) => (
          <Post
            key={postData.data.id +
              (Math.random()).toString(2).substring(2, 9)}
            dataPost={postData.data} />
        ))}
        {postLoading === 'loading' && <PreLoader />}
        {postLoading === 'error' && (
          <Text As='p' color='orange' center fontWeight='bold'>
            Упс... Ошибка загрузки постов на страницу...
          </Text>
        )}
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};
