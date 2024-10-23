import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home.jsx';
import Showhome from './Showhome.jsx';
import UpdateForm from './UpdateForm.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/showhome" element={<Showhome/>} />
                <Route path="/update/:index" element={<UpdateForm/>} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;    
