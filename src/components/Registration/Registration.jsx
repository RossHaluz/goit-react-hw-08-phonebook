import { useFormik } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';
import { SignInForm } from './Registration.styled';
import { useDispatch } from 'react-redux';
import * as authOperation from 'redux/auth/operations';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.number().required(),
});

const Register = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(authOperation.register(values));
      resetForm();
    },
  });

  return (
    <SignInForm onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        type="text"
        label="Name"
        variant="outlined"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />

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
        Regisater
      </Button>

      <Typography variant="p">
        If you already have an account <Link to="/login">Log in</Link>
      </Typography>
    </SignInForm>
  );
};

export default Register;
