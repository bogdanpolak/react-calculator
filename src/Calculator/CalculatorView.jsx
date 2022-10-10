export const Segment = {
  First: "First",
  Second: "Second",
  Third: "Third",
  Fourth: "Fourth",
};

const Segments = [
  { name: Segment.First, field: "first" },
  { name: Segment.Second, field: "second" },
  { name: Segment.Third, field: "third" },
  { name: Segment.Fourth, field: "fourth" },
];

class CalculatorView {
  constructor() {
    this.first = 0;
    this.second = 0;
    this.third = 0;
    this.fourth = 0;
    this.total = 0;
    this.onDisplayTotal = null;
  }

  registerFinalCall = (finalCall) => {
    this.finalCall = finalCall;
  };

  setSegment = (componentName, value) => {
    const segmentDef = Segments.find((seg) => seg.name === componentName);
    if (!segmentDef)
      throw Error(
        `Invalid segment name. Actual parameter: '${componentName}' is not any of expected:` +
          ` ${Segments.map((seg) => seg.name).join(" or ")}`
      );
    this[segmentDef.field] = value;
    this.recalculateTotal();
    if (this.onDisplayTotal) {
      this.onDisplayTotal();
    }
  };

  recalculateTotal = () => {
    this.total = Number(this.first) + Number(this.second) + Number(this.third) + Number(this.fourth);
  }
}

export const calculatorView = new CalculatorView();
