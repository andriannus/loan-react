import * as Yup from 'yup';

export const LoanFormSchema = Yup.object().shape({
  address: Yup.string()
    .required('Address is required'),
  dob: Yup.string()
    .required('Date of birth is required'),
  email: Yup.string()
    .email('E-mail is invalid')
    .required('E-mail is required'),
  gender: Yup.string()
    .required('Gender is required'),
  name: Yup.string()
    .required('Name is required'),
  nik: Yup.string()
    .required('NIK is required')
});

export const loanFormInitialValues = {
  address: '',
  dob: '',
  email: '',
  gender: '',
  name: '',
  nik: ''
};
