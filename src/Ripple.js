import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import * as styling from './styling.js';

const Ripple = ({diameter}) => {
  const rippleDiameterPx = `${diameter}px`;

  const RippleWaist = styled.div`
    position: absolute;
    top: calc((100vh / 2) - (${styling.btnHeight} / 2));
    left: calc((100vw / 2) - (${styling.btnHeight} / 2));
    height: ${styling.btnHeight};
    width: ${styling.btnHeight};
    border-radius: calc(${styling.btnHeight} / 2);
    box-shadow: 0 0 40px ${rippleDiameterPx} ${styling.foreColor}; 
    z-index: 2;
  `;
  
  const RippleInner = styled.div`
    position: absolute;
    top: calc((100vh / 2) - (${styling.btnHeight} / 2));
    left: calc((100vw / 2) - (${styling.btnHeight} / 2));
    height: ${styling.btnHeight};
    width: ${styling.btnHeight};
    border-radius: calc(${styling.btnHeight} / 2);
    box-shadow: 0 0 40px calc(${rippleDiameterPx} - 50px) ${styling.backColor}; 
    z-index: 4;
  `;

  return (
    <div>
      <RippleInner key="inner" />,
      <RippleWaist key="waist" />
    </div>
  );
};

Ripple.propTypes = {
  diameter: PropTypes.number.isRequired
};

export default Ripple;

