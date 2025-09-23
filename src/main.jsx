// src/main.jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import "./css/index.css"
import ExperienceBooking from './pages/experiance'
import UserProfile from './pages/profile'


createRoot(document.getElementById('root')).render(
      <App></App>
)
