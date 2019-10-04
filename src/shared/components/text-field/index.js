import React from 'react';

import { Container } from 'shared/components/text-field/text-field-content';
import TextFieldContext from 'shared/components/text-field/modules/services/text-field.context';

const TextField = ({ errors, label, name, placeholder, touched }) => {
  return (
    <TextFieldContext.Provider
      value={{
        errors,
        label,
        name,
        placeholder,
        touched
      }}
    >
      <Container />
    </TextFieldContext.Provider>
  )
}

export default TextField;
