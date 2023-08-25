import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Registrate from './Pages/Registrate/Registrate'
import Authorize from './Pages/Authorize/Authorize'

const App: React.FC = () => {

  return (
    <Routes>
      <Route path='/reg' element={<Registrate />} />
      <Route path='/' element={<Authorize />} />
    </Routes>
  )
}

export default App
