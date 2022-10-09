import { useState } from "react";
import { calculatorView } from "./CalculatorView";

export function CalculatorSegment({ name }) {
  const [value, setValue] = useState('');
  return (
    <span>
      <input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          calculatorView.setSegment(name, e.target.value);
        }} />
    </span>
  );
}
