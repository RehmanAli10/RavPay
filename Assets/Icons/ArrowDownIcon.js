import React from 'react';
import {Svg, Defs, Polygon} from 'react-native-svg';

const ArrowDownIcon = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      id="transaction">
      <Defs />
      <Polygon
        points="18.71 18.71 22.41 15 18.71 11.29 17.29 12.71 18.59 14 10 14 10 16 18.59 16 17.29 17.29 18.71 18.71"
        fill="black"
      />
      <Polygon
        points="6.71 11.29 5.41 10 14 10 14 8 5.41 8 6.71 6.71 5.29 5.29 1.59 9 5.29 12.71 6.71 11.29"
        fill="black"
      />
    </Svg>
  );
};

export default ArrowDownIcon;
