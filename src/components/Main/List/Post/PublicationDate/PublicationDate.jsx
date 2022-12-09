import style from './PublicationDate.module.css';
import formatPostDate from '../../../../../utils/formatPostDate';
import PropTypes from 'prop-types';

export const PublicationDate = ({ date }) => (
  <time className={style.date} dateTime={formatPostDate(date)}>
    {formatPostDate(date)}
  </time>
);

PublicationDate.propTypes = {
  date: PropTypes.number
};
