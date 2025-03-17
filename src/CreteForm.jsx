import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./form.css";
function CreateForm() {
  const navigate = useNavigate();
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef=useRef()
  const messageRef = useRef();
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    e.preventDefault(); 
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phone,
      message: messageRef.current.value,
      age: ageRef.current.value,
    };
    navigate("/data", { state: formData }); 
  };
  return (
    <div className="formData">
      <h2>Form</h2>
      <form onSubmit={handleChange}>
        <input type="text" name="name" placeholder="Enter name" ref={nameRef} /><br />
        <input type="email" name="email" placeholder="Enter email" ref={emailRef} /><br />
        <input type="number" name="phone" placeholder="Enter the phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required/><br />
        <input type="number" placeholder="Enter age" ref={ageRef} required /><br />
        <textarea name="message" placeholder="Enter your message" ref={messageRef}></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateForm;
