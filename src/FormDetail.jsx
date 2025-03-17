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
