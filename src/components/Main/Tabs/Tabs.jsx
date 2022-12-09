import style from './Tabs.module.css';
import PropTypes from 'prop-types';
import { Text } from '../../../UI/Text';
import { useEffect, useState } from 'react';
import { assignId } from '../../../utils/generateRandomId';
import { debounceRaf } from '../../../utils/debounce';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as ArrowIcon } from './imgTab/arrow.svg';
import { ReactComponent as HomeIcon } from './imgTab/home.svg';
import { ReactComponent as TopIcon } from './imgTab/top.svg';
import { ReactComponent as BestIcon } from './imgTab/best.svg';
import { ReactComponent as HotIcon } from './imgTab/hot.svg';

const LIST = [
  { value: 'Главная', Icon: HomeIcon, link: 'rising' },
  { value: 'Топ', Icon: TopIcon, link: 'top' },
  { value: 'Лучшие', Icon: BestIcon, link: 'best' },
  { value: 'Горячие', Icon: HotIcon, link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(true);
  const [menuChecked, setMenuChecked] = useState('');
  const navigate = useNavigate();

  const handleResize = () => {
    if (document.documentElement.clientWidth < 768) {
      setIsDropdown(true);
    } else {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    debounceResize();
    window.addEventListener('resize', debounceResize);
    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);
  // const handleClick = id => {
  //   setList(list.filter(item => item.id !== id));
  // };

  return (
    <div className={style.container}>
      {isDropdown && (
        <Text As='div' className={style.wrapperBtn}>
          <button className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {menuChecked ? menuChecked : 'Меню'}
            <ArrowIcon width={15} height={15}/>
          </button>
        </Text>)}

      {(isDropdownOpen || !isDropdown) &&
      <ul
        className={style.list}
        onClick={() => setIsDropdownOpen(false)}
      >
        {LIST.map(({ value, link, id, Icon }) => (
          <Text As='li' className={style.item} key={id}>
            <button
              className={style.btn}
              onClick={() => {
                setMenuChecked(value);
                navigate(`/category/${link}`);
              }}>
              {value}
              {Icon && <Icon width={30} height={30}/>}
            </button>
          </Text>
        ))}
      </ul>}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
  addItem: PropTypes.func,
};
