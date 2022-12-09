import style from './Rating.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../../../UI/Text';

export const Rating = ({ rating }) => (
  <Text As='div' className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг' />
    <Text As='p' fontWeight={'bold'} className={style.ups}>{rating}</Text>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </Text>
);

Rating.propTypes = {
  rating: PropTypes.number,
};
