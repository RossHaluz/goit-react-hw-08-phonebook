import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button } from '@mui/material';
import { Form } from './UpdateContact.styled';
import * as ContactOparetion from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import Modal from 'components/Modal';

const validationSchema = yup.object({
  name: yup.string('Enter your name').required('Name is required'),
  number: yup.string('Enter your number').required('Number is required'),
});

const UpdateContact = ({ data, onClose }) => {
  const { id, name, number } = data;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: name,
      number: number,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(ContactOparetion.updateContsct({ id, ...values }));
      onClose();
      resetForm();
      dispatch(ContactOparetion.getContacts());
    },
  });

  return (
    <Modal onClose={onClose}>
      <Form onSubmit={formik.handleSubmit}>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="number"
          name="number"
          label="Number"
          type="tell"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default UpdateContact;
