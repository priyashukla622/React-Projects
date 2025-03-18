import { useState, useEffect } from "react";
import "./moviedetail.css";
function MovieDetail() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    const storedMovie = localStorage.getItem("selectedMovie");
    if (storedMovie) {
      setMovie(JSON.parse(storedMovie));
    }
    console.log(localStorage.getItem("selectedMovie")); 
    
  }, []);
  return (
    <div className="Movie">
      <h1>Movie Detail</h1>
      <div className="movies-container">
        {movie ? (
          <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <h1>{movie.title}</h1>
            <p>{movie.year}</p>
            <p>{movie.rating}</p>
            {movie.genre?.map((item, index) => (
              <div key={index} className="item">
                <p>{item}</p>
              </div>
            ))}
          </div>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </div>
  );
}
export default MovieDetail;
