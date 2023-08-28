import React from 'react';
import Form from '../../Components/GeneralForm/GeneralForm';
import Header from '../../Components/Header/Header';
import { formTypes } from '../../utils/constants';

const Registrate: React.FC = () => {
  return (
    <>
      <Header />
      <Form nav={formTypes.registration.fields} type={formTypes.registration.type} />
    </>
  );
};

export default Registrate;
