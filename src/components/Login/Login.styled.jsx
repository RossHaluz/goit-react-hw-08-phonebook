import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const LoginForm = styled(Form)`
  display: flex;
  max-width: 350px;
  gap: 20px;
  flex-direction: column;
`;

export const LoginFormInput = styled(Field)`
  font-size: 16px;
  padding: 10px;
`;

export const LoginFormBtn = styled.button`
  font-size: 16px;
  padding: 10px;
  border-radius: 10px;
`;

export const Error = styled(ErrorMessage)`
  color: red;
`;
