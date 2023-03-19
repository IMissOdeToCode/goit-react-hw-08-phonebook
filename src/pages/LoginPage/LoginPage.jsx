import { useDispatch } from 'react-redux';

import { login } from 'redux/auth/auth-operations';

import LoginForm from 'modules/LoginForm/LoginForm';

// import css from './LoginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };

  return (
    <>
      <div>LoginPage</div>
      <LoginForm onSubmit={handleLogin} />
    </>
  );
};

export default LoginPage;
