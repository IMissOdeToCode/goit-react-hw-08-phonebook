import { useDispatch } from 'react-redux';

import { signup } from 'redux/auth/auth-operations';

import RegisterForm from 'modules/RegisterForm/RegisterForm';

// import css from './RegisterPage.module.scss';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSingup = data => {
    dispatch(signup(data));
  };

  return (
    <>
      <div>RegisterPage</div>
      <RegisterForm onSubmit={handleSingup} />
    </>
  );
};

export default RegisterPage;
