import React from 'react';
import {Svg, Path} from 'react-native-svg';

const NetworkOperatorIcon = ({height, width, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 25"
      id="network-tower"
      height={height}
      width={width}
      fill={fill}>
      <Path d="M16.69 21 14 8.48a2.5 2.5 0 1 0-3 0L8.31 21H4v1h17v-1Zm-2.35-3-1.84 1-1.84-1Zm-3.6-1 1.75-.91 1.74.91Zm4.43 1.69.4 1.87-2-1Zm-1.6-3.16.83-.43.21 1Zm.61-1.44L12.5 15l-1.68-.88v-.08h3.34Zm-2.77 1.44-1 .53.21-1Zm0 4-2 1 .4-1.87Zm1.08.56 1.75.91h-3.5ZM12.5 5A1.5 1.5 0 1 1 11 6.5 1.5 1.5 0 0 1 12.5 5Zm.6 4 .9 4h-3l.86-4Zm2.34-.6a3.48 3.48 0 0 0 0-3.81l.83-.59a4.48 4.48 0 0 1 0 4.91ZM18 6.5a5.41 5.41 0 0 0-1.11-3.3l.8-.6a6.46 6.46 0 0 1 0 7.8l-.8-.6A5.41 5.41 0 0 0 18 6.5Zm-10 0A4.44 4.44 0 0 1 8.73 4l.83.55a3.48 3.48 0 0 0 0 3.81L8.73 9A4.44 4.44 0 0 1 8 6.5Zm-.69 3.9a6.46 6.46 0 0 1 0-7.8l.8.6a5.46 5.46 0 0 0 0 6.6Z" />
    </Svg>
  );
};

export default NetworkOperatorIcon;
