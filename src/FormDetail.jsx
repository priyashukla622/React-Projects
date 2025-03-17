// import { useLocation } from "react-router-dom";
// import "./formDetail.css"
// function FormData() {
//   const location = useLocation();
//   const { state } = location; 
//   if (!state) {
//     return <div>No data passed</div>;
//   }
//   const { fromState, fromRef } = state;
//   return (
//     <div className="detail">
//       <h2>Form Data</h2>
//       <h3>Data from useState:</h3>
//       <p>Name: {fromState.name}</p>
//       <p>Email: {fromState.email}</p>
//       <p>Phone: {fromState.phone}</p>
//       <p>Message:{fromState.message}</p>
     

//       <h3>Data from useRef:</h3>
//       <p>Name: {fromRef.name}</p>
//       <p>Email: {fromRef.email}</p>
//       <p>Phone: {fromRef.phone}</p>
//       <p>Message:{fromRef.message}</p>
//     </div>
//   );
// }
// export default FormData;




import { useLocation,useNavigate } from "react-router-dom";
import "./formDetail.css";
function FormDetail(){
  const {state}=useLocation();
  const navigate=useNavigate();
  return(
    <div className="detail">
      <h2>Submitted Data</h2>
      {state?(
        <>
          <p><strong>Name:</strong>{state.name}</p>
          <p><strong>Email:</strong>{state.email}</p>
          <p><strong>Phone:</strong>{state.phone}</p>
          <p><strong>Age:</strong>{state.age}</p>
          <p><strong>Message:</strong>{state.message}</p>
        </>
      ):(
        <p>Data Not found</p>
      )}
      <button onClick={()=>navigate("/")}>Go Back</button>
    </div>
  );
}
export default FormDetail;
