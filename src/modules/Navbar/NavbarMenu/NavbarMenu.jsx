import { NavLink } from 'react-router-dom';

import css from './NavbarMenu.module.scss';

import navbarMenuItems from './navbarMenuItems';

const NavbarMenu = () => {
  const elements = navbarMenuItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default NavbarMenu;
