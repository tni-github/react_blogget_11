import style from './HomePage.module.css';

export const HomePage = () => (
  <div className={style.wrapper}>
    <h2 className={style.heading}>Стартовая страница</h2>
    <p className={style.text}>
    Добро пожаловать на страницу проекта <b>&#34;Blogget&#34;</b>!
    </p>

    <p className={style.text}>
      От использования всех возможностей приложения
      Вас отделяют всего <b>2 шага</b>
    </p>

    <p className={style.step}>Шаг первый:</p>
    <p className={style.text}>Пожалуйста, авторизуйтесь в правом верхнем
    углу, <span>если еще не сделали этого</span>!</p>

    <p className={style.step}>Шаг второй:</p>
    <p className={style.text}>После авторизации для отображения информации
    необходимо выбрать категорию в меню выше.</p>
  </div>
);
