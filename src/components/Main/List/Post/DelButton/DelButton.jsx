import style from './DelButton.module.css';
import { ReactComponent as DelIcon } from '../imgPost/delete.svg';

export const DelButton = () => (
  <button className={style.delete}>
    <DelIcon className={style.delIcon} width='24' height='24'/>
  </button>
);
