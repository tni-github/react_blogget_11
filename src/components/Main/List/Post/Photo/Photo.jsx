import style from './Photo.module.css';
import notphoto from '../imgPost/notphoto.jpg';
import PropTypes from 'prop-types';

export const Photo = ({ src, alt }) => (
    src.match(/^http?s./) ?
    <img className={style.img}
      src={src} alt={alt} /> :
    <img className={style.img} src={notphoto} alt={alt} />
);

Photo.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
