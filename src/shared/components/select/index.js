import React from 'react';

import { Container } from 'shared/components/select/select-content';
import SelectContext from 'shared/components/select/modules/services/select.context';

const TextField = ({ errors, items, label, name, touched }) => {
  return (
    <SelectContext.Provider
      value={{
        errors,
        items,
        label,
        name,
        touched,
      }}
    >
      <Container />
    </SelectContext.Provider>
  )
}

export default TextField;
