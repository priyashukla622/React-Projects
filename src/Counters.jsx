// import { useEffect } from "react"

// How to fetch using useEffect


// Api call
// import { useEffect, useState } from "react";

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         setData(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>API Data</h1>
//       {data ? <p>{data.title}</p> : <p>Loading...</p>}
//     </div>
//   );
// }

// export default App;


// ###########updeted btn###########

// import { useEffect, useState } from "react";
// function App() {
//   const [data, setData] = useState([]);
//   const [post, setPost]=useState(1)
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/1${post}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         setData(data);
//       })
//       .catch((error) => console.error("Error fetching data:", error));
//   },[post]);

//   const handleUpdate=()=>{
//     setPost(post+1)
//   }
//   return (
//     <div>
//       <h1>{data.title}</h1>
//       {/* {data ? <p>{data.title}</p> : <p>Data not found in this Api</p>} */}
//       <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }
// export default App;






// ####################couter app####################

import { useState } from 'react'
import './App.css'
function Counter(){
  const[count, setCount]=useState(0)
  return(
    <div className="container">
      <div className='count'>
        <h1>Counter App</h1>
      </div>
      <h2>{count}</h2>
      <div className='btn'>
        <button className='inc' onClick={()=>setCount(count+1)}>Increment</button>
        <button  className="dec" onClick={()=>setCount(count-1)}>Decrement</button>
        <button  className="reset" onClick={()=>setCount(0)}>Reset</button>
      </div>
    </div>
  );
}
export default Counter;