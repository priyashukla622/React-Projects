// For Counter App
// import React from "react";
// import Counter from "./Counters"
// function App(){
//   return(
//     <div className="App">
//         <Counter/>

//     </div>
//   )
// }
// export default App;





//  ###########Form Movie ###########
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MovieList from "./MovieList";
// import MovieDetail from "./MovieDetail"; 
// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<MovieList />} />
//         {/* <Route path="/movie/:id" element={<MovieDetail />} /> */}
//         <Route path="/movie" element={<MovieDetail />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;







// ############for form @@@@@@@@@@@@
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./CreteForm";
import FormData from "./FormDetail";
function App(){
  return(
  <Router>
    <Routes>
      <Route path="/" element={<Form/>}/>
      <Route path="/data" element={<FormData/>}/>
    </Routes>
  </Router>
  )
}
export default App;






