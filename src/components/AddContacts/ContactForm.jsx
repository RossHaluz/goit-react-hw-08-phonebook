import React from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import * as contactsOperation from 'redux/contacts/operations';
import { Button, TextField } from '@mui/material';
import { ContactTitle, FormContact } from './ContactForm.styled';
import ContactsList from 'components/ContactsList';
import FilterContacts from 'components/FilterContacts';

let schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },

    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      const findName = contacts.find(
        contact =>
          contact.name === values.name && contact.number === values.number
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
    <>
      <ContactTitle variant="h2" sx={{ mb: '10px' }}>
        Add contact
      </ContactTitle>
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
          id="number"
          type="text"
          name="number"
          label="Phone"
          value={formik.values.number}
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
        />

        <Button variant="contained" type="submit">
          Add contact
        </Button>
      </FormContact>
      <FilterContacts />
      <ContactsList />
    </>
  );
};

export default ContactForm;
