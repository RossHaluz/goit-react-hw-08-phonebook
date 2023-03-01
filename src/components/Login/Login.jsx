import { Formik } from 'formik';
import { Link } from 'react-router-dom';
import { LoginForm, Error } from './Login.styled';
import * as authOperations from 'redux/auth/operations';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { TextField, Button, Typography } from '@mui/material';

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
        <TextField
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
          name="email"
        />
        <Error component="p" name="email" />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          name="password"
        />
        <Error component="p" name="password" />

        <Button variant="contained" type="submit">
          Login
        </Button>
        <Typography variant="p">
          Or <Link to="/register">Register</Link>
        </Typography>
      </LoginForm>
    </Formik>
  );
};

export default Login;
