import React, { useState, ChangeEvent, KeyboardEvent } from "react";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

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

  return (
    <form className="verification-container">
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
      <div className="button-container">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default Verification;
