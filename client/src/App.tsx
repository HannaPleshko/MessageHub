import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registrate from './Pages/Registrate/Registrate';
import Authorize from './Pages/Authorize/Authorize';
import Messages from './Pages/Messages/Messages';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/reg" element={<Registrate />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/" element={<Authorize />} />
    </Routes>
  );
};

export default App;
