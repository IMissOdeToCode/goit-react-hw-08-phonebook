import useForm from 'shared/hooks/useForms';

import TextField from 'shared/TextField/TextField';
import Button from 'components/Button/Button';

import css from './RegisterForm.module.scss';
import initialState from './initialFormState';
import fields from './fields';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { name, email, password } = state;

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <br />
      <TextField value={name} handleChange={handleChange} {...fields.name} />
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        handleChange={handleChange}
        {...fields.password}
      />

      <Button>Register</Button>
    </form>
  );
};

export default RegisterForm;
