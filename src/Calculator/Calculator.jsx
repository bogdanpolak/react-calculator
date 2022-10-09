import { useEffect } from "react";
import { useState } from "react";
import { calculatorView } from "./CalculatorView";
import { CalculatorSegment } from "./CalculatorSegment";
import { Segment } from "./Segment";

export default function Calculator() {
  const [total, setTotal] = useState();

  useEffect(() => {
    calculatorView.onDisplayTotal = () => setTotal(calculatorView.total);
  }, []);

  return (
    <div>
      <h1>Calculator</h1>
      <CalculatorSegment name={Segment.First} />
      <CalculatorSegment name={Segment.Second} />
      <CalculatorSegment name={Segment.Third} />
      <div className="total">Total: {total}</div>
    </div>
  );
}


