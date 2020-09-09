import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };

  add = () => {
    this.setState((cur) => ({
      count: cur.count + 1
    }));
  };

  minus = () => {
    this.setState((cur) => ({
      count: cur.count - 1
    }));
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
