// correct vala code

// import { useState, useEffect } from "react";
// import { useParams, } from "react-router-dom";
// import "./moviedetail.css";
// function MovieDetail() {
//   const { id } = useParams();
//   const [movie, setMovie] = useState("");
//   useEffect(() => {
//     async function fetchMovieDetails() {
//       try {
//         const fetchData = await fetch(`https://movie-project-ko1b.onrender.com/movie/${id}`);
//         console.log("Response Status:", fetchData.status); 
//         if (!fetchData.ok) {
//           throw new Error(`HTTP error! Status: ${fetchData.status}`);
//         }
//         const data = await fetchData.json();
//         const movieData=data.getOneMovie
//         setMovie(movieData);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     }
//     fetchMovieDetails();
//   }, [id]);
// //   if (!movie) return <h2>movie not found</h2>;
//   console.log(movie)
//   return (
//     <div className="Movie">
//          <h1>Movie Detail</h1>
//         <div className="movies-container">
//         {movie?(
//             <div className="movie-card">
//                <img src={movie.poster}/>
//                <h1>{movie.title}</h1>
//                <p>{movie.year}</p>
//                <p>{movie.rating}</p>
//                {movie.genre.map((item,index)=>(
//                 <div key={index} className="item">
//                    <p>{item}</p>
//                 </div>
//                ))}
//            </div>
//         ):(
//             <h2>Looding....</h2>
//         )}
//        </div>
//     </div>
//   )
// }
// export default MovieDetail;







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
