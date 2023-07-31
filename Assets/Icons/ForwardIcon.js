import React from 'react';
import {Svg, Path} from 'react-native-svg';

const ForwardIcon = ({width, height, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 -2 32 32">
      <Path
        id="Path_94"
        data-name="Path 94"
        d="M16.587,6.42,27.167,17,16.587,27.58a2,2,0,0,0,2.833,2.833L31.414,18.42a2.013,2.013,0,0,0,0-2.84L19.42,3.587A2,2,0,0,0,16.587,6.42Z"
        fill={fill}
      />
      <Path
        id="Rectangle_45"
        data-name="Rectangle 45"
        d="M0,0H26a2,2,0,0,1,2,2V2a2,2,0,0,1-2,2H0A0,0,0,0,1,0,4V0A0,0,0,0,1,0,0Z"
        transform="translate(28 19) rotate(180)"
        fill={fill}
      />
    </Svg>
  );
};

export default ForwardIcon;
