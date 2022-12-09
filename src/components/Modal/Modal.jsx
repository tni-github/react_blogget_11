import style from './Modal.module.css';
import { ReactComponent as CloseIcon } from './imgModal/close.svg';
import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { useCommentsData } from '../../hooks/useCommentsData';
import { Text } from '../../UI/Text';
import Comments from './Comments';
import FormComment from './FormComment';
import { useNavigate, useParams } from 'react-router-dom';

export const Modal = () => {
  const { id, page } = useParams();
  const navigate = useNavigate();
  const [isFormCommentOpen, setIsFormCommentOpen] = useState(false);

  const [post, comments, status] = useCommentsData(id);

  const overlayRef = useRef(null);
  const iconRef = useRef(null);

  const handleClick = e => {
    const target = e.target;
    if (target === overlayRef.current || (target === iconRef.current)) {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  const handleKeyDown = e => {
    const key = e.key;
    if (key === 'Escape') {
      // closeModal();
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && (
          <div className={style.loader_container}>
            <div className={style.loader}></div>
            <div className={style.loader_text}>Loading...</div>
          </div>
        )}
        {status === 'error' && (
          <Text As='p' color='orange' center fontWeight='bold'>
            Ошибка загрузки комментариев на страницу
          </Text>
        )}
        {status === 'loaded' && (
          <>
            <Text As='h2' className={style.title}>
              {post.title}
            </Text>

            <Text As='p' className={style.author}>
              Author: {post.author}
            </Text>

            <FormComment isFormCommentOpen={isFormCommentOpen}
              openFormComment={() => {
                setIsFormCommentOpen(true);
              }}
            />

            <Comments comments={comments} />

            <button className={style.close}>
              <CloseIcon ref={iconRef}/>
            </button>
          </>
        )}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
