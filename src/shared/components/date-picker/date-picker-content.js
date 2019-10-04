import React, { useContext } from 'react';
import { ErrorMessage, Field } from 'formik';

import DatePickerContext from 'shared/components/date-picker/modules/services/date-picker.context';

export const Container = () => {
  return (
    <div className="field">
      <Label />

      <Control />
    </div>
  );
}

const Label = () => {
  const { label } = useContext(DatePickerContext);

  return (
    <label className="label">{ label }</label>
  )
}

const Control = () => {
  const { errors, touched, name } = useContext(DatePickerContext);

  return (
    <div className="control">
      <Field
        className={
          'input' + (errors && touched ? ' is-danger' : '')
        }
        name={name}
        type="date"
      />

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  )
}
