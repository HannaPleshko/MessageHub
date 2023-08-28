import React from 'react';
import Form from '../../Components/GeneralForm/GeneralForm';
import Header from '../../Components/Header/Header';
import { formTypes } from '../../utils/constants';

const Authorize: React.FC = () => {
  return (
    <>
      <Header />
      <Form nav={formTypes.authorization.fields} type={formTypes.authorization.type} />
    </>
  );
};

export default Authorize;
