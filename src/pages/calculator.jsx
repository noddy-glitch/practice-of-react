import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  return (
    <div className="calc-container">
      <div className="calc">
        <input type="text" className="display" value={value} readOnly />

        <div className="buttons">

          <button onClick={() => setValue("")} className="btn clear">C</button>
          <button value="%" className="btn" onClick={(e) => setValue(value + e.target.value)}>%</button>
          <button value="*" className="btn" onClick={(e) => setValue(value + e.target.value)}>×</button>

          <button value="1" className="btn" onClick={(e) => setValue(value + e.target.value)}>1</button>
          <button value="2" className="btn" onClick={(e) => setValue(value + e.target.value)}>2</button>
          <button value="3" className="btn" onClick={(e) => setValue(value + e.target.value)}>3</button>
          <button value="+" className="btn operator" onClick={(e) => setValue(value + e.target.value)}>+</button>

          <button value="5" className="btn" onClick={(e) => setValue(value + e.target.value)}>5</button>
          <button value="6" className="btn" onClick={(e) => setValue(value + e.target.value)}>6</button>
          <button value="7" className="btn" onClick={(e) => setValue(value + e.target.value)}>7</button>
          <button value="-" className="btn operator" onClick={(e) => setValue(value + e.target.value)}>-</button>

          <button value="9" className="btn" onClick={(e) => setValue(value + e.target.value)}>9</button>
          <button value="0" className="btn" onClick={(e) => setValue(value + e.target.value)}>0</button>

          <button className="btn equals" onClick={() => setValue(eval(value))}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
