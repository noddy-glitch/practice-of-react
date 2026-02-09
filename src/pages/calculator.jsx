import React, { useState } from "react";
import "./calculator.css";

const Calculator = () => {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  const clearAll = () => setValue("");
  const deleteLast = () => setValue(value.slice(0, -1));

  return (
    <div className="calc-container">
      <div className="calc-box">


        <input type="text" className="display" value={value} readOnly />


        <div className="btn-grid">


          <button className="btn danger" onClick={clearAll}>AC</button>
          <button className="btn warning" onClick={deleteLast}>⌫</button>
          <button value="%" className="btn operator" onClick={handleClick}>%</button>


          <button value="/" className="btn operator" onClick={handleClick}>÷</button>

          <button value="7" className="btn" onClick={handleClick}>7</button>
          <button value="8" className="btn" onClick={handleClick}>8</button>
          <button value="9" className="btn" onClick={handleClick}>9</button>
          <button value="*" className="btn operator" onClick={handleClick}>×</button>

          <button value="4" className="btn" onClick={handleClick}>4</button>
          <button value="5" className="btn" onClick={handleClick}>5</button>
          <button value="6" className="btn" onClick={handleClick}>6</button>
          <button value="-" className="btn operator" onClick={handleClick}>−</button>

          <button value="1" className="btn" onClick={handleClick}>1</button>
          <button value="2" className="btn" onClick={handleClick}>2</button>
          <button value="3" className="btn" onClick={handleClick}>3</button>
          <button value="+" className="btn operator" onClick={handleClick}>+</button>

          <button value="0" className="btn zero" onClick={handleClick}>0</button>
          <button value="." className="btn" onClick={handleClick}>.</button>
          <button className="btn equals" onClick={calculate}>=</button>

        </div>

      </div>
    </div>
  );
};

export default Calculator;
