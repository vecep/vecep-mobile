import React from "react";
import Svg, { Path } from "react-native-svg";

function WaveView({ customStyles, customWavePattern, fill }) {
  return (
    <Svg viewBox="0 0 1200 40" style={customStyles}>
      <Path fill={fill} d={customWavePattern} />
    </Svg>
  );
}

export default WaveView;
