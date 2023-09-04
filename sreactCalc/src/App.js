import { useState, useRef } from "react";
import "./App.css";

import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { TbDivide } from "react-icons/tb";
import { GrPowerReset } from "react-icons/gr";
import { BsReverseBackspaceReverse } from "react-icons/bs";


function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{/* add the value of the current total */result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>
          <AiOutlinePlus/>
        </button>
        <button onClick={minus}>
          <AiOutlineMinus />
        </button>
        <button onClick={times}>
          <FaTimes />
        </button>
        <button onClick={divide}>
          <TbDivide />
        </button>

        <button id="func" onClick={resetInput}>
          <BsReverseBackspaceReverse /> <label>Reset Input</label>
        </button>
        <button id="func" onClick={resetResult}>
          <GrPowerReset /> <label>Reset Result</label>
        </button>
      </form>
    </div>
  );
}

export default App;
