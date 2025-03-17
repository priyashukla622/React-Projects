// import "./movie.css";
// import { useState, useEffect } from "react";
// function MovieList(){
//     const[movies, setMovies]=useState([])
//     const[page, setPage]=useState(1);
//     const pageMovie=3;
//     useEffect(()=>{
//         fetch(`https://movie-project-ko1b.onrender.com/movies`)
//         .then((res)=>res.json())
//         .then((data)=>{
//             setMovies(data.getMovies)
//             console.log(data)
//         })
//         .catch((error)=>{
//             console.log("error is comming",error)
//         })
//     },[])
//     const handleNext=()=>{
//         setPage(page+1)
//     }
//     const handlePrevious = () => {
//         if(page>1){
//             setPage(page-1)
//         }
//     };
//     const startIndex=(page-1)*pageMovie;
//     const endIndex= startIndex + pageMovie;
//     const showMovie=movies.slice(startIndex,endIndex)
//     return(
//         <div className="Movie">
//           <h1>Movie List</h1>
//             <div className="movies-container">
//              {showMovie.length>0?

//              showMovie.map((movieData,index)=>{
//                 return <div key={index} className="movie-card">
//                   <img src={movieData.poster}/>
//                    <h3>{movieData.title}</h3>
//                    <p>{movieData.year}</p>
//                    <p>{movieData.rating}</p>
//                 </div>
//                 })
//                 :
//                 <h1>No movie found</h1>
//            }
//            </div>
//            <button onClick={handlePrevious}>Previous</button>
//            <button onClick={handleNext}>Next</button>
//         </div>
//     )
// }
// export default MovieList;


// corected code
// import "./movielist.css";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function MovieList() {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const pageMovie = 3;

//   useEffect(() => {
//     fetch(`https://movie-project-ko1b.onrender.com/movies`)
//       .then((res) => res.json())
//       .then((data) => {
//         setMovies(data.getMovies);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log("Error:", error);
//       });
//   }, []);

//   const handleNext = () => {
//     setPage(page + 1);
//   };

//   const handlePrevious = () => {
//     if (page > 1) {
//       setPage(page - 1);
//     }
//   };
//   const startIndex = (page - 1) * pageMovie;
//   const endIndex = startIndex + pageMovie;
//   const showMovie = movies.slice(startIndex, endIndex);
//   return (
//     <div className="Movie">
//       <h1>Movie List</h1>
//       <div className="movies-container">
//         {showMovie.length > 0 ? (
//           showMovie.map((movieData, index) => {
//             console.log("Movie ID:", movieData._id);
//             return (
//               <div key={index} className="movie-card">
//                 <Link to={`/movie/${movieData._id}`} key={movieData._id}>
//                   <img src={movieData.poster} alt={movieData.title} />
//                 </Link>
//                 <h3>{movieData.title}</h3>
//                 <p>{movieData.year}</p>
//                 <p>{movieData.rating}</p>
//               </div>
//             );
//           })
//         ) : (
//           <h1>No movie found</h1>
//         )}
//       </div>
//       <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
//       <button onClick={handleNext} disabled={page*pageMovie>=movies.length}>Next</button>
//     </div>
//   );
// }
// export default MovieList;


// 234567890-578890-=-=4w3q21
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";  
import "./movielist.css";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const pageMovie = 3;
  const navigate = useNavigate();
  useEffect(() => {
    
    fetch(`https://movie-project-ko1b.onrender.com/movies`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.getMovies);  
        console.log(data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrevious = () =>{
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const startIndex = (page - 1) * pageMovie;
  const endIndex = startIndex + pageMovie;
  const showMovie = movies.slice(startIndex, endIndex);
  function handleLocal(movie) {
    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    navigate("/movie");  
  }
  return (
    <div className="Movie">
      <h1>Movie List</h1>
      <div className="movies-container">
        {showMovie.length > 0 ? (
          showMovie.map((movieData) => (
            <div 
              key={movieData._id} 
              className="movie-card" 
              onClick={() => handleLocal(movieData)}>
              <img src={movieData.poster} alt={movieData.title} />
              <h3>{movieData.title}</h3>
              <p>{movieData.year}</p>
              <p>{movieData.rating}</p>
            </div>
          ))
        ) : (
          <h1>No movie found</h1>
        )}
      </div>
      <button onClick={handlePrevious} disabled={page === 1}>Previous</button>
      <button onClick={handleNext} disabled={page * pageMovie >= movies.length}>Next</button>
    </div>
  );
}
export default MovieList;
