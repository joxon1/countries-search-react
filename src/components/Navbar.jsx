import React from "react";
import ReactSwitch from "react-switch";
import Form from "./Form";
import "./Navbar.css";

const Navbar = ({ value, setValue, filterCountries, toggleTheme, theme }) => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Form
          value={value}
          setValue={setValue}
          filterCountries={filterCountries}
        />
        <div className="dark_btn">
          <h3>Dark Mode</h3>{" "}
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
