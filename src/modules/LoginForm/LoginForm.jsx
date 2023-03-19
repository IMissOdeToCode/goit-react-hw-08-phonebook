import useForm from 'shared/hooks/useForms';

import TextField from 'shared/TextField/TextField';
import Button from 'components/Button/Button';

import css from './LoginForm.module.scss';
import initialState from './initialLoginState';
import fields from './fields';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <br />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />

      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;
