import React, { useState } from "react";
import "./Form.css";

const Form = ({ value, setValue, filterCountries }) => {
  const [isOpened, setIsOpened] = useState(true);

  const itemClick = (e) => {
    setValue(e.target.textContent);
    setIsOpened(!isOpened);
  };

  const inputClick = () => {
    setIsOpened(true);
  };

  return (
    <form className="form_container">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Поиск страны"
        className="form_input"
        onClick={inputClick}
      />
      {value && isOpened ? (
        <ul className="avtocomplate">
          {filterCountries.map((item, index) => (
            <li className="item" onClick={itemClick} key={index}>
              {item.name}
            </li>
          ))}
        </ul>
      ) : null}
    </form>
  );
};

export default Form;
