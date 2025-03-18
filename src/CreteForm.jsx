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
