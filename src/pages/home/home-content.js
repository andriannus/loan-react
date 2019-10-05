import React, { useContext } from 'react';
import { Formik, Form } from 'formik';

import { loanFormInitialValues, LoanFormSchema } from 'pages/home/home.schema';
import HomeContext from 'pages/home/modules/services/home.context';
import { GENDER_OPTIONS } from 'shared/constants/home.constant';
import DatePicker from 'shared/components/date-picker';
import Select from 'shared/components/select';
import TextField from 'shared/components/text-field';

export const Container = () => {
  const { history } = useContext(HomeContext);

  function handleSubmit(fields) {
    history.push({
      pathname: '/detail',
      state: fields,
    });
  }

  return (
    <Formik
      initialValues={loanFormInitialValues}
      validationSchema={LoanFormSchema}
      onSubmit={(fields) => handleSubmit(fields)}
      render={({ errors, touched }) => (
        <FormLoan errors={errors} touched={touched} />
      )}
    />
  )
}

const FormLoan = ({ errors, touched }) => {
  return (
    <Form>
      <TextField
        errors={errors.name}
        touched={touched.name}
        label="Name"
        name="name"
        placeholder="Input name here.."
      />

      <TextField
        errors={errors.nik}
        touched={touched.nik}
        label="NIK"
        name="nik"
        placeholder="Input NIK here.."
      />

      <div className="columns">
        <div className="column">
          <DatePicker
            errors={errors.dob}
            touched={touched.dob}
            label="Date of birth"
            name="dob"
          />
        </div>

        <div className="column">
          <Select
            errors={errors.gender}
            items={GENDER_OPTIONS}
            touched={touched.gender}
            label="Gender"
            name="gender"
          />
        </div>
      </div>

      <TextField
        errors={errors.address}
        touched={touched.address}
        label="Address"
        name="address"
        placeholder="Input address here.."
      />

      <TextField
        errors={errors.email}
        touched={touched.email}
        label="Email"
        name="email"
        placeholder="Input email here.."
      />

      <div className="field">
        <button className="button is-link" type="submit">
          Submit
        </button>
      </div>
    </Form>
  )
}
