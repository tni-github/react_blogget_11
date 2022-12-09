import style from './ErrorPage.module.css';

export const ErrorPage = () => (
  <div className={style.wrapper}>
    <div className={style.blink}>NOT FOUND</div>
    <div className={style.text}>404</div>
  </div>
);
