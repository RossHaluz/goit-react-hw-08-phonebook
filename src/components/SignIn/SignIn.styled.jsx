import styled from '@emotion/styled';
import { Field, Form, ErrorMessage } from 'formik';

export const SignInForm = styled(Form)`
  display: flex;
  max-width: 350px;
  gap: 20px;
  flex-direction: column;
`;

export const SignInFormInput = styled(Field)`
  font-size: 16px;
  padding: 10px;
`;

export const SignInFormBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
