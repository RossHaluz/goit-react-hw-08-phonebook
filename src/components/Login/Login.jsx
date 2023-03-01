import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { LoginForm, LoginFormInput, LoginFormBtn, Error } from './Login.styled';
import * as authOperations from 'redux/auth/operations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

let schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.number().required(),
});

const Login = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmitForm = (values, { resetForm }) => {
    dispatch(authOperations.login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <LoginForm>
        <LoginFormInput
          type="email"
          name="email"
          placeholder="Type your email"
        />
        <Error component="p" name="email" />
        <LoginFormInput
          type="password"
          name="password"
          placeholder="Type you password"
        />
        <Error component="p" name="password" />

        <LoginFormBtn type="submit">Login</LoginFormBtn>
        <p>
          Or <Link to="/register">Register</Link>
        </p>
      </LoginForm>
    </Formik>
  );
};

export default Login;
