// import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import "./form.css";
// function CreateForm() {
//   const navigate = useNavigate();
//   const info=useRef()
//   const [phone, setPhone] = useState("");
//   const handleChange = (e) => {
//     e.preventDefault(); 
//     const formData = {
//       name: info.current.value,
//       email: info.current.value,
//       phone: phone,
//       message: info.current.value,
//       age: info.current.value,
//     };
//     navigate("/data", { state: formData }); 
//   };
//   return (
//     <div className="formData">
//       <h2>Form</h2>
//       <form ref={info} onSubmit={handleChange}>
//         <input type="text" name="name" placeholder="Enter name"/><br />
//         <input type="email" name="email" placeholder="Enter email"/><br />
//         <input type="number" name="phone" placeholder="Enter the phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required/><br />
//         <input type="number" placeholder="Enter age"/><br />
//         <textarea name="message" placeholder="Enter your message"></textarea><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
// export default CreateForm;





// import { useNavigate } from "react-router-dom";
// import { useRef, useState } from "react";
// import "./form.css";

// function CreateForm() {
//   const navigate = useNavigate();
  
//   // useRef for form fields
//   const nameRef = useRef();
//   const emailRef = useRef();
//   const ageRef = useRef();
//   const messageRef = useRef();

//   // useState for controlled input (phone number)
//   const [phone, setPhone] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       name: nameRef.current.value,
//       email: emailRef.current.value,
//       phone: phone,
//       age: ageRef.current.value,
//       message: messageRef.current.value,
//     };
//     localStorage.setItem("formData", JSON.stringify(formData));

//     navigate("/data"); 
//   };
//   return (
//     <div className="formData">
//       <h2>Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter name" ref={nameRef} required /><br />
//         <input type="email" placeholder="Enter email" ref={emailRef} required /><br />
//         <input type="number" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br />
//         <input type="number" placeholder="Enter age" ref={ageRef} required /><br />
//         <textarea placeholder="Enter your message" ref={messageRef} required></textarea><br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default CreateForm;





import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./form.css";
function CreateForm() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const messageRef = useRef();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phone,
      age: ageRef.current.value,
      message: messageRef.current.value,
    };
    localStorage.setItem("formData", JSON.stringify(formData)); 
    navigate("/data");
  };
  return (
    <div className="formData">
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter name" ref={nameRef} required /><br />
        <input type="email" placeholder="Enter email" ref={emailRef} required /><br />
        <input type="number" placeholder="Enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} required /><br />
        <input type="number" placeholder="Enter age" ref={ageRef} required /><br />
        <textarea placeholder="Enter your message" ref={messageRef} required></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateForm;
