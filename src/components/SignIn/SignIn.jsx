import {
  SignInForm,
  SignInFormInput,
  SignInFormBtn,
  Error,
} from './SignIn.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import * as authOperations from 'redux/auth/operations';
import { Link } from 'react-router-dom';

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
    dispatch(authOperations.register({ values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmitForm}
    >
      <SignInForm>
        <SignInFormInput type="text" name="name" placeholder="Type your name" />
        <Error component="p" name="name" />
        <SignInFormInput
          type="email"
          name="email"
          placeholder="Type your email"
        />
        <Error component="p" name="email" />
        <SignInFormInput
          type="password"
          name="password"
          placeholder="Type a password"
        />
        <Error component="p" name="password" />

        <SignInFormBtn type="submit">Regisater</SignInFormBtn>

        <p>
          If you already have an account <Link to="/login">Log in</Link>
        </p>
      </SignInForm>
    </Formik>
  );
};

export default Register;
