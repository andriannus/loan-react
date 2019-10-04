import React, { useContext } from 'react';
import { ErrorMessage, Field } from 'formik';

import TextFieldContext from 'shared/components/text-field/modules/services/text-field.context';

export const Container = () => {
  return (
    <div className="field">
      <Label />

      <Control />
    </div>
  );
}

const Label = () => {
  const { label } = useContext(TextFieldContext);

  return (
    <label className="label">{ label }</label>
  )
}

const Control = () => {
  const { errors, touched, name, placeholder } = useContext(TextFieldContext);

  return (
    <div className="control">
      <Field
        className={
          'input' + (errors && touched ? ' is-danger' : '')
        }
        name={name}
        placeholder={placeholder}
        type="text"
      />

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  )
}
