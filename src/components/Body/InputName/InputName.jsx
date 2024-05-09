import React, { useState } from "react";
import "./InputName.scss";

function InputWithValidation() {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    const isValidInput = /^[A-Za-zА-Яа-яЁё\s]+$/.test(value);
    setIsValid(isValidInput);
    setInputValue(value);
  };

  return (
    <div>
      <label htmlFor="inputField" className="inputLabel">
        Введите имя
      </label>
      <br />
      <input
        type="text"
        id="inputField"
        className="inputField"
        value={inputValue}
        onChange={handleChange}
        style={{ borderColor: isValid ? "initial" : "red" }}
      />
      {!isValid && (
        <p style={{ color: "red" }}>
          Пожалуйста, введите только буквы и пробелы.
        </p>
      )}
    </div>
  );
}

export default InputWithValidation;
