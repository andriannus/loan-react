import React from 'react';

import { Container } from 'shared/components/date-picker/date-picker-content';
import DatePickerContext from 'shared/components/date-picker/modules/services/date-picker.context';

const TextField = ({ errors, label, name, touched }) => {
  return (
    <DatePickerContext.Provider
      value={{
        errors,
        label,
        name,
        touched,
      }}
    >
      <Container />
    </DatePickerContext.Provider>
  )
}

export default TextField;
