import React from "react"
import {Routes, Route, BrowserRouter} from "react-router-dom";
import ExperienceBooking from "./pages/experiance";
import UserProfile from "./pages/profile";
import ConfirmationPage from "./pages/dashboard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const movieNumber = 1;


  return (
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<ExperienceBooking/>} />
            <Route path="/profile" element={<UserProfile/>} />
            <Route path="/dashboard" element={<ConfirmationPage/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
  )
}


export default App;
