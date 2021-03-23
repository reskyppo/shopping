import Context from "./Context";

import React, { Component } from "react";

class Provider extends Component {
  state = {
    value: "home",
  };
  render() {
    return (
      <Context.Provider
        value={{
          value: this.state.value,
          changeValue: (selectedValue) => {
            this.setState({
              value: selectedValue,
            });
          },
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Provider;
