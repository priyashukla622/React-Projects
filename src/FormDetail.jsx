import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./formDetail.css";
function FormDetail() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(null);
  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);
  return (
    <div className="detail">
      <h2>Submitted Data</h2>
      {formData ? (
        <>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Age:</strong> {formData.age}</p>
          <p><strong>Message:</strong> {formData.message}</p>
        </>
      ) : (
        <p>Data Not Found</p>
      )}
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default FormDetail;