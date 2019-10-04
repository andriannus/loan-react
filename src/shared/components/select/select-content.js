import React, { useContext } from 'react';
import { ErrorMessage, Field } from 'formik';

import SelectContext from 'shared/components/select/modules/services/select.context';

export const Container = () => {
  return (
    <div className="field">
      <Label />

      <Control />
    </div>
  );
}

const Label = () => {
  const { label } = useContext(SelectContext);

  return (
    <label className="label">{ label }</label>
  )
}

const Control = () => {
  const { errors, items, touched, name } = useContext(SelectContext);

  return (
    <div className="control">
      <div className={'select' + (errors && touched ? ' is-danger' : '')}>
        <Field component="select" name={name}>
          {
            items.map((item, key) => {
              return (
                <option key={key} value={item.value}>{ item.text }</option>
              )
            })
          }
        </Field>
      </div>

      <ErrorMessage name={name} component="p" className="help is-danger" />
    </div>
  )
}
