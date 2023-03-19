import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { login } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';

import LoginForm from 'modules/LoginForm/LoginForm';

// import css from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <div>LoginPage</div>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
