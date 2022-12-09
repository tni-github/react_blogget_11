import style from './Post.module.css';
import Photo from './Photo';
import ContentPost from './ContentPost';
import Rating from './Rating';
import PublicationDate from './PublicationDate';
import DelButton from './DelButton';
import PropTypes from 'prop-types';

export const Post = ({ dataPost }) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    id,
    created: date,
  } = dataPost;

  return (
    <li className={style.post}>
      <Photo src={thumbnail} alt={title} />
      <ContentPost id={id} title={title} author={author} />
      <Rating rating={ups} />
      <PublicationDate date={date} />
      <DelButton />
    </li>
  );
};

Post.propTypes = {
  dataPost: PropTypes.object,
};
