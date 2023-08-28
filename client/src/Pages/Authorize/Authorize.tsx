import React from 'react';
import Form from '../../Components/GeneralForm/GeneralForm';
import Header from '../../Components/Header/Header';

const Authorize: React.FC = () => {
  return (
    <>
      <Header />
      <Form nav={['email', 'password']} />
    </>
  );
};

export default Authorize;
