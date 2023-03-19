import { useSelector } from 'react-redux';

import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';

import { isUserLogin } from 'redux/auth/auth-selector';

import css from '../Navbar/Navbar.module.scss';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <div className={css.navbar}>
      <NavbarMenu />
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
