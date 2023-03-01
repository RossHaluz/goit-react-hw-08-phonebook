import { SignInForm, Error } from './SignIn.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/operations';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField, Typography } from '@mui/material';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.number().required(),
});

const Register = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const onSubmitForm = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <SignInForm>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
        />
        <Error component="p" name="name" />
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
          Regisater
        </Button>

        <Typography variant="p">
          If you already have an account <Link to="/login">Log in</Link>
        </Typography>
      </SignInForm>
    </Formik>
  );
};

export default Register;
