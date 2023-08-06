import React from 'react';
import {Svg, Path} from 'react-native-svg';

const CopyIcon = ({height, width, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 1"
      viewBox="0 0 32 32"
      id="copy-page"
      height={height}
      width={width}
      fill={fill}>
      <Path d="M21.5,6V7.5H12A2.5,2.5,0,0,0,9.5,10V23.5H8A1.5,1.5,0,0,1,6.5,22V6A1.5,1.5,0,0,1,8,4.5H20A1.5,1.5,0,0,1,21.5,6Z" />
      <Path d="M24,8.5H12A1.5,1.5,0,0,0,10.5,10V26A1.5,1.5,0,0,0,12,27.5H24A1.5,1.5,0,0,0,25.5,26V10A1.5,1.5,0,0,0,24,8.5Zm-6,13H14a.5.5,0,0,1,0-1h4a.5.5,0,0,1,0,1Zm4-4H14a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Zm0-4H14a.5.5,0,0,1,0-1h8a.5.5,0,0,1,0,1Z" />
    </Svg>
  );
};

export default CopyIcon;
