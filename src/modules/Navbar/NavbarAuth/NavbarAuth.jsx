import { NavLink } from 'react-router-dom';

import css from './NavbarAuth.module.scss';

import navbarAuthItems from './navbarAuthItems';

const NavbarAuth = () => {
  const elements = navbarAuthItems.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{elements}</ul>;
};

export default NavbarAuth;
