import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CounterList from "./components/CounterList";
import Navbar from "./components/Navbar";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [value, setValue] = useState("");

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

  return (
    <>
      <Navbar value={value} setValue={setValue} />
      <CounterList filterCountries={filterCountries} />
    </>
  );
};

export default App;
