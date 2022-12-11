import ClipLoader from 'react-spinners/ClipLoader';
import style from './PreLoader.module.css';

export const PreLoader = () => (
  <div className={style.preloader}>
    <ClipLoader
      color='#cc6633'
      css={{ display: 'block' }}
      size={30}
    />
  </div>
);
