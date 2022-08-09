import React from "react";
import "./Form.css";

const Form = ({ value, setValue }) => {
  return (
    <form className="form_container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск страны"
        className="form_input"
      />
    </form>
  );
};

export default Form;
