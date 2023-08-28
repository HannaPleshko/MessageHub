import React from 'react';
import Form from '../../Components/GeneralForm/GeneralForm';
import Header from '../../Components/Header/Header';

const Registrate: React.FC = () => {
  return (
    <>
      <Header />
      <Form nav={['name', 'surname', 'email', 'password']} />
    </>
  );
};

export default Registrate;
