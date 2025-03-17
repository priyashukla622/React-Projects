
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import "./form.css";
function CreateForm() {
  const navigate = useNavigate();
  const info=useRef()
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
     e.preventDefault(); 
    const formData = {
      name: info.current.value,
      email: info.current.value,
      phone: phone,
      message: info.current.value,
      age: info.current.value,
    };
    navigate("/data", { state: formData }); 
  };
  return (
    <div className="formData">
      <h2>Form</h2>
      <form ref={info} onSubmit={handleChange}>
        <input type="text" name="name" placeholder="Enter name"/><br />
        <input type="email" name="email" placeholder="Enter email"/><br />
        <input type="number" name="phone" placeholder="Enter the phone number" value={phone} onChange={(e) => setPhone(e.target.value)} required/><br />
        <input type="number" placeholder="Enter age"/><br />
        <textarea name="message" placeholder="Enter your message"></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default CreateForm;
