"use client";

import React, { useState } from "react";

const PhysicalCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const clearAll = () => {
    setDisplay("0");
    setStoredValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  interface InputDigitFn {
    (digit: number): void;
  }

  const inputDigit: InputDigitFn = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const performOperation = (nextOperation: string | null) => {
    const inputValue = parseFloat(display);

    if (storedValue === null) {
      setStoredValue(inputValue);
    } else if (operation) {
      const currentValue = storedValue || 0;
      let newValue = 0;

      switch (operation) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "×":
          newValue = currentValue * inputValue;
          break;
        case "÷":
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }

      setStoredValue(newValue);
      setDisplay(String(newValue));
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    if (!operation || storedValue === null) return;

    performOperation(null);
    setOperation(null);
  };

  const handlePercentage = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(-value));
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-800 rounded-xl shadow-lg">
      {/* Display */}
      <div className="mb-4 p-3 bg-gray-900 rounded-md">
        <div className="text-right text-3xl font-mono text-green-400 overflow-hidden">
          {display}
        </div>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-4 gap-3">
        {/* Row 1 */}
        <button
          onClick={clearAll}
          className="col-span-2 p-4 bg-red-600 hover:bg-red-700 text-white rounded-md font-bold"
        >
          AC
        </button>
        <button
          onClick={toggleSign}
          className="p-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-bold"
        >
          +/-
        </button>
        <button
          onClick={handlePercentage}
          className="p-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md font-bold"
        >
          %
        </button>

        {/* Row 2 */}
        <button
          onClick={() => inputDigit(7)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          7
        </button>
        <button
          onClick={() => inputDigit(8)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          8
        </button>
        <button
          onClick={() => inputDigit(9)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          9
        </button>
        <button
          onClick={() => performOperation("÷")}
          className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xl font-bold"
        >
          ÷
        </button>

        {/* Row 3 */}
        <button
          onClick={() => inputDigit(4)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          4
        </button>
        <button
          onClick={() => inputDigit(5)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          5
        </button>
        <button
          onClick={() => inputDigit(6)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          6
        </button>

        <button
          onClick={() => performOperation("×")}
          className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xl font-bold"
        >
          ×
        </button>
        {/* Row 4 */}
        <button
          onClick={() => inputDigit(1)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          1
        </button>
        <button
          onClick={() => inputDigit(2)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          2
        </button>
        <button
          onClick={() => inputDigit(3)}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          3
        </button>
        <button
          onClick={() => performOperation("-")}
          className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xl font-bold"
        >
          -
        </button>

        {/* Row 5 */}
        <button
          onClick={() => inputDigit(0)}
          className="col-span-2 p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          0
        </button>
        <button
          onClick={inputDecimal}
          className="p-4 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-xl font-bold"
        >
          .
        </button>
        <button
          onClick={() => performOperation("+")}
          className="p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xl font-bold"
        >
          +
        </button>
        {/* Row 6 */}
        <button
          onClick={handleEquals}
          className="col-span-4 p-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xl font-bold"
        >
          =
        </button>
      </div>
    </div>
  );
};

export default PhysicalCalculator;
