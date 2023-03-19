import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { signup } from 'redux/auth/auth-operations';
import { isUserLogin } from 'redux/auth/auth-selector';

import RegisterForm from 'modules/RegisterForm/RegisterForm';

// import css from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSingup = data => {
    dispatch(signup(data));
  };

  const isLogin = useSelector(isUserLogin);

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <>
      <div>RegisterPage</div>
      <RegisterForm onSubmit={handleSingup} />
    </>
  );
};

export default RegisterPage;
