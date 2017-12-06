import React, { Component } from 'react';
import styled from 'styled-components';

import * as styling from './styling.js';
import Ripple from './Ripple.js';

const MainScreen = styled.div`
  text-align: center;
  background-color: ${styling.backColor};
  color: ${styling.foreColor};
  height: 100vh;
`;

const MainButton = styled.button`
  color: ${styling.foreColor};
  background-color: ${styling.backColor};
  appearance: none;
  height: ${styling.btnHeight};
  width: ${styling.btnHeight};
  border-radius: calc(${styling.btnHeight} / 2);
  border: 1px solid ${styling.foreColor};
  position: absolute;
  top: calc((100vh / 2) - (${styling.btnHeight} / 2));
  left: calc((100vw / 2) - (${styling.btnHeight} / 2));
  z-index: 50;

  &:hover {
    color: ${styling.backColor};
    background-color: ${styling.foreColor};
  }

  &:focus {
    outline: none;
  }
`;

class App extends Component {
  state = {
    rippleDiameter: 0
  };

  handleButtonClicked = () => {
    this.animate();
  }

  animate = () => {
    if (this.state.rippleDiameter >= 1000) {
      this.setState({rippleDiameter: 0});
      return;
    }

    this.setState(prev => ({rippleDiameter: prev.rippleDiameter + 10}), () => {
      window.setTimeout(this.animate, 10);
    });
  }

  render() {
    let ripple = null;

    if (this.state.rippleDiameter > 0) {
      ripple = (<Ripple diameter={this.state.rippleDiameter} />);
    }

    return (
      <MainScreen>
        <MainButton onClick={this.handleButtonClicked}>Touch Me</MainButton>
        {ripple}
      </MainScreen>
    );
  }
}

export default App;
