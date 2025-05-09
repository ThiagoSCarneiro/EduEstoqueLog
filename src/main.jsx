import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/inter'
import Pages from './pages/pages';
import "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Pages />} />
        {/* <Route path='/qr-code' element={<TelaSec />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
