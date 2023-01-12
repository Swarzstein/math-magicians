import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div id="calculator">
        <input id="result" type="number" name="calculator-screen" value={result} />
        <div id="calcButtons">
          <div>
            <button type="button" className="calcButton" id="clear">AC</button>
            <button type="button" className="calcButton" id="sign">+/-</button>
            <button type="button" className="calcButton" id="percent">%</button>
            <button type="button" className="calcButton operator" id="divide">/</button>
          </div>
          <div>
            <button type="button" className="calcButton" id="7">7</button>
            <button type="button" className="calcButton" id="8">8</button>
            <button type="button" className="calcButton" id="9">9</button>
            <button type="button" className="calcButton operator" id="multiply">*</button>
          </div>
          <div>
            <button type="button" className="calcButton" id="4">4</button>
            <button type="button" className="calcButton" id="5">5</button>
            <button type="button" className="calcButton" id="6">6</button>
            <button type="button" className="calcButton operator" id="less">-</button>
          </div>
          <div>
            <button type="button" className="calcButton" id="1">1</button>
            <button type="button" className="calcButton" id="2">2</button>
            <button type="button" className="calcButton" id="3">3</button>
            <button type="button" className="calcButton operator" id="plus">+</button>
          </div>
          <div>
            <div>
              <button className="calcButton2" type="button" id="button17">0</button>
            </div>
            <div>
              <button className="calcButton" type="button" id="button18">.</button>
              <button className="calcButton operator" type="button" id="button19">=</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
