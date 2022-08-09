import React from "react";
import "./CounterList.css";
const CounterList = ({ filterCountries }) => {
  return (
    <div className="counter_list">
      {filterCountries.map((counter, index) => (
        <div className="counter_item" key={index}>
          <img src={counter.flags.png} alt="" className="counter_img" />
          <h1 className="counter_name">{counter.name}</h1>
          <div className="counter_info">
            <p>
              <b>Region: </b>
              {counter.region}
            </p>
            <p>
              <b>Capital: </b>
              {counter.capital}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CounterList;
