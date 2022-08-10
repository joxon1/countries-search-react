import axios from "axios";
import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CounterList from "./components/CounterList";
import Navbar from "./components/Navbar";

export const ThemeContext = createContext(null);

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState("light");

  const getCountries = () => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setCountries(response.data));
  };

  const filterCountries = countries.filter((counter) => {
    return counter.name.toLowerCase().includes(value.toLowerCase());
  });

  useEffect(() => {
    getCountries();
  }, []);

  const toggleTheme = () => {
    setTheme((cur) => (cur === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <Navbar
          value={value}
          setValue={setValue}
          filterCountries={filterCountries}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <CounterList filterCountries={filterCountries} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
