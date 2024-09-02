import axios from "axios";
import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!value.match(/^[0-9]*$/)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1) {
      const nextSibling = e.target
        .nextElementSibling as HTMLInputElement | null;
      nextSibling?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      if (index > 0) {
        const previousSibling = (e.target as HTMLInputElement)
          .previousElementSibling as HTMLInputElement | null;
        previousSibling?.focus();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const code = otp.join("");

    try {
      setError(null);
      const response = await axios.post(
        "http://localhost:5000/api/verify-code",
        {
          code,
        }
      );
      const data = response.data;
      navigate("/home");
    } catch (err: any) {
      if (err.response && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <form className="verification-container" onSubmit={handleSubmit}>
      <h2 className="heading-secondary">Enter the verification code</h2>
      <div className="input-container">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <div className="button-container">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Verification;
