import logo from './../../img/logo-4.png';
import header from './Header.module.css';


export const Header = () => {
  return (
    <header className={header.header}>
        <div className={header.header__wrapper}>
          <img src={logo} alt="" className={header.logo}/>
          <ul className={header.menu__list}>
            <li className={header.menu__item}>
              <a href="#">Жанр</a>
            </li>
            <li className={header.menu__item}>
              <a href="#">Страна</a>
            </li>
            <li className={header.menu__item}>
              <a href="#">Год</a>
            </li>
          </ul>
          <ul className={header.nav__list}>
            <li className={header.nav__item}>
              <a href="#">Предыдущий</a>
            </li>
          </ul>
        </div>
      </header>
  )
}