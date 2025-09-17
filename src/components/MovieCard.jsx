function MovieCard({movie}){

     function Click(text){
          console.log(text);
     }

     return(
     <div className="movie-card">
          <div className="movie-poster">
               <img src={movie.url} alt="" />
               <div className="movie-overlay">
                    <button className="favorite-btn" onClick={Click(movie.title)}>Click</button>
               </div>
          </div>

          <div className="movie-info">
               <h3>{movie.title}</h3>
               <p>{movie.release_date}</p>
          </div>

     </div>
     
     )
}

export default MovieCard;