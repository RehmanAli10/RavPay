import React from 'react';
import {Svg, Path} from 'react-native-svg';

const MenuIcon = ({width, height}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        id="Vector"
        d="M5 17H19M5 12H19M5 7H19"
        stroke="#000000"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default MenuIcon;
