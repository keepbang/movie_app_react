import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
    this.resultPrint();
  };

  minus = () => {
    this.setState({
      count: this.state.count - 1
    });
    this.resultPrint();
  };

  render() {
    return (
      <div>
        <div>Counter : {this.state.count}</div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
