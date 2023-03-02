import { useFormik } from 'formik';
import { Link } from 'react-router-dom';
import { LoginForm } from './Login.styled';
import * as yup from 'yup';
import { TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import * as authOperation from 'redux/auth/operations';

let schema = yup.object().shape({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(authOperation.login(values));
      resetForm();
    },
  });

  return (
    <LoginForm onSubmit={formik.handleSubmit}>
      <TextField
        id="email"
        type="email"
        label="E-mail"
        variant="outlined"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
      />
      <TextField
        id="password"
        type="password"
        label="Password"
        variant="outlined"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
      />

      <Button variant="contained" type="submit">
        Login
      </Button>
      <Typography variant="p">
        Or <Link to="/signout">Register</Link>
      </Typography>
    </LoginForm>
  );
};

export default Login;
