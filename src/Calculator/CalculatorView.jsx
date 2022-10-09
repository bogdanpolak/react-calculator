import { Segment } from "./Segment";

class CalculatorView {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.third = 0;
    this.total = 0;
    this.onDisplayTotal = null;
  }

  registerFinalCall = (finalCall) => {
    this.finalCall = finalCall;
  };

  setSegment = (componentName, value) => {
    if (componentName !== Segment.First && componentName !== Segment.Second 
      && componentName !== Segment.Third)
      throw Error(
        `Invalid segment name. Actual parameter: '${componentName}' is not any of expected ${Segment.First} or ${Segment.Second}`
      );
    componentName === Segment.First && (this.first = value);
    componentName === Segment.Second && (this.second = value);
    componentName === Segment.Third && (this.third = value);
    this.total = Number(this.first) + Number(this.second) + Number(this.third);
    this.onDisplayTotal && this.onDisplayTotal();
  };
}
export const calculatorView = new CalculatorView();
