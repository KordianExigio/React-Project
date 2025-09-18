import MovieCard from "../components/MovieCard";
import { useState, useEffect} from "react";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css";


function Home(){

     const [searchQuery, setSeatchQuery] = useState("");
     const [movies, setMovies] = useState([]);
     const [error, setError] = useState(null);
     const [loading,setLoading] = useState(true);

     useEffect(() => {
          const loadPopularMovies = async () => {
               try{
                    const popularMovies = await getPopularMovies();
                    setMovies(popularMovies);
               } catch(err){
                    console.log(error);
                    setError("Bład załadowania filmów");
               }
               finally{
                    setLoading(false);
               }
          }

          loadPopularMovies();
     }, [])



     const handleSearch = (e) => {
          e.preventDefault()
          alert(searchQuery);
          setSeatchQuery("");
     }

     return(
          <div className="home">
               <form onSubmit={handleSearch} className="search-form">
                    <input
                     type="text" 
                     placeholder="Search for movies..." 
                     className="search-input"
                     value={searchQuery}
                     onChange={(e) => setSeatchQuery(e.target.value)}
                      />
                    <button className="search-button" type="submot">Search</button>
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