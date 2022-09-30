import React, { useState } from "react";
import "./Input.scss";

interface InputProps {
  onChange?: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
  label: string;
}

function Input(props: InputProps) {
  const { onChange, onSubmit, placeholder, label } = props;
  const [value, setValue] = useState("");
  return (
    <>
      <div>{label}</div>
      <input
        type="text"
        onChange={(e) => {
          onChange && onChange(e.target.value);
          setValue(e.target.value);
        }}
        onKeyDown={(e) => {
          e.key === "Enter" && onSubmit(value);
        }}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;
