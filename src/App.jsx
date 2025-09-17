import React from "react"
import MovieCard from "./components/MovieCard";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favirotes";
import NavBar from "./components/NavBar";

function App() {
  const movieNumber = 1;


  return (

    <div>
      <NavBar></NavBar>
      <main className="main-content">
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/favorites" element={<Favorite/>}></Route>
      </Routes>
    </main>
    </div>
    
  )
}


export default App;
