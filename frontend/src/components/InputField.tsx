import { ChangeEvent, KeyboardEvent } from "react";

interface OtpInputProps {
  index: number;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>, index: number) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>, index: number) => void;
}

const InputField: React.FC<OtpInputProps> = ({
  index,
  value,
  handleChange,
  handleKeyDown,
}) => {
  return (
    <input
      type="text"
      maxLength={1}
      value={value}
      onChange={(e) => handleChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  );
};
export default InputField;
