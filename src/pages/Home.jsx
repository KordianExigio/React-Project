import MovieCard from "../components/MovieCard";
import { useState} from "react";


function Home(){

     const [searchQuery, setSeatchQuery] = useState("");


     const movies = [
          { id: 1, title: "John Wick", release_date: "2014" },
          { id: 2, title: "Avengers: Endgame", release_date: "2019" },
          { id: 3, title: "Inception", release_date: "2010" },
          { id: 4, title: "The Dark Knight", release_date: "2008" },
          { id: 5, title: "Interstellar", release_date: "2014" },
          { id: 6, title: "Parasite", release_date: "2019" },
     ];


     const handleSearch = (e) => {
          e.preventDefault()
          alert(searchQuery);
          setSeatchQuery("");
     }

     return(
          <div className="home">
               <form onSubmit={handleSearch} className="seatch-form">
                    <input
                     type="text" 
                     placeholder="Search for movies..." 
                     className="search-input"
                     value={searchQuery}
                     onChange={(e) => setSeatchQuery(e.target.value)}
                      />
                    <button className="search-btn" type="submot">Search</button>
               </form>

               <div className="movies-grid">
                    {movies.map(
                         (movie) => 
                              movie.title.toLowerCase().startsWith(searchQuery) && (
                                   <MovieCard movie={movie} key={movie.id}></MovieCard>
                              )
                         )}
               </div>
          </div>
     )
}

export default Home;