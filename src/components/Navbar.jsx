import React from "react";
import Form from "./Form";
import "./Navbar.css";

const Navbar = ({ value, setValue }) => {
  return (
    <div className="navbar">
      <div className="navbar_container">
        <Form value={value} setValue={setValue} />
        <button>Dark/Nigth</button>
      </div>
    </div>
  );
};

export default Navbar;
