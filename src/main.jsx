// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import "./css/index.css"
import ExperienceBooking from './pages/experiance'



createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <ExperienceBooking/>
    </BrowserRouter>
  </>
)
