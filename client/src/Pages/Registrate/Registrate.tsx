import React from 'react';
import Form from '../../Components/NavForm/NavForm';

const Registrate: React.FC = () => {
  return (
    <>
      <Form nav={['name', 'surname', 'email', 'password']} />
    </>
  );
};

export default Registrate;
