import React from 'react';
import {Svg, Path, G, Defs} from 'react-native-svg';

const FreezeIcon = ({height, width, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      style="shape-rendering:geometricPrecision;text-rendering:geometricPrecision;image-rendering:optimizeQuality;"
      viewBox="0 0 847 1058.75"
      x="0px"
      y="0px"
      fill-rule="evenodd"
      clip-rule="evenodd"
      height={height}
      width={width}
      fill={fill}>
      <Defs></Defs>
      <G>
        <Path
          class="fil0"
          d="M386 471l-42 24c-10,-11 -18,-24 -22,-38l43 -25 0 -18 -43 -25c5,-14 12,-27 21,-37l43 25 14 -10 0 -48c14,-3 29,-3 44,0l0 48 16 10 43 -25c9,11 17,23 21,37l-43 25 0 18 43 25c-5,14 -12,27 -22,38l-42 -24 -15 9 0 48c-14,3 -29,3 -43,0l0 -48 -16 -9zm-59 35l-59 34 -20 145 -35 -4 16 -118 -124 71 -22 -39 124 -71 -112 -47 14 -31 137 55 59 -34c5,14 13,27 22,38zm-22 -125l-59 -34 -137 58 -14 -34 112 -46 -124 -71 22 -38 124 71 -16 -120 35 -4 20 147 58 34c-9,11 -16,24 -21,37zm96 -81l0 -68 -118 -90 22 -28 96 72 0 -142 44 0 0 142 97 -72 22 28 -119 90 0 68c-14,-2 -29,-2 -44,0zm120 44l59 -34 19 -147 36 4 -16 120 124 -71 21 37 -124 72 111 46 -15 33 -136 -57 -59 34c-5,-14 -12,-26 -21,-37zm21 124l59 34 136 -57 15 32 -111 47 124 71 -21 39 -124 -71 16 118 -36 4 -19 -145 -59 -34c10,-11 17,-24 22,-38zm-97 81l0 68 119 90 -22 28 -97 -72 0 142 -43 0 0 -142 -97 72 -22 -28 119 -90 0 -68c14,2 29,2 43,0z"
        />
      </G>
    </Svg>
  );
};

export default FreezeIcon;
