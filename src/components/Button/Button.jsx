import css from './Button.module.scss';

const Button = ({ children, type = 'submit' }) => {
  return (
    <button type={type} className={css.btn}>
      {children}
    </button>
  );
};

export default Button;
