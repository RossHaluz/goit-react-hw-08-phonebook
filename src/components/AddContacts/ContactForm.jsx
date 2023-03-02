import React from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contactsOperation';
import { Button, TextField } from '@mui/material';
import { FormContact } from './ContactForm.styled';

let schema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.number().required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const findName = contacts.find(
        contact =>
          contact.name === values.name && contact.phone === values.phone
      );

      if (findName) {
        toast.error(`${values.name} is already in contacts!`);
        resetForm();
        return;
      } else {
        toast.success(`${values.name} successfully added!`);
      }
      dispatch(contactsOperation.addContact(values));
      resetForm();
    },
  });

  return (
    <FormContact onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        type="text"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.touched.name && Boolean(formik.errors.name)}
      />

      <TextField
        id="phone"
        type="text"
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
      />

      <Button variant="contained" type="submit">
        Add contact
      </Button>
    </FormContact>
  );
};

export default ContactForm;
