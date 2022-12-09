import { Text } from '../../../UI/Text';
import style from './FormComment.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserComment } from '../../../store/userCommentReducer';
import { useAuth } from '../../../hooks/useAuth';

export const FormComment = ({ isFormCommentOpen, openFormComment }) => {
  const value = useSelector(state => state.userCommentReducer.comment);
  const dispatch = useDispatch();

  const [auth] = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = e => {
    dispatch(updateUserComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      {!isFormCommentOpen ?
        <button
          className={style.btn}
          onClick={openFormComment}>
          Написать комментарий
        </button> :
        <>
          <Text As='h3' size={14} tsize={18}>
            {auth.name}
          </Text>
          <textarea
            className={style.textarea}
            value={value}
            onChange={handleChange}
            autoFocus
          >
          </textarea>
          <button className={style.btn}>
            Отправить
          </button>
        </>
      }
    </form>
  );
};

FormComment.propTypes = {
  isFormCommentOpen: PropTypes.bool,
  openFormComment: PropTypes.func,
};
