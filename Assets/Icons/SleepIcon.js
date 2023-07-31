import React from 'react';
import {Svg, Path, Defs, ClipPath} from 'react-native-svg';

const SleepIcon = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 47.5 47.5"
      viewBox="0 0 47.5 47.5"
      id="zzz"
      width={width}
      height={height}>
      <Defs>
        <ClipPath id="a">
          <Path d="M0 38h38V0H0v38Z" />
        </ClipPath>
      </Defs>

      <Path
        fill="#4289c1"
        d="M0 0c1.187 0 2-.786 2-2 0-1.073-.983-2-2-2h-11c-1.496 0-2 .813-2 2 0 .565.632 1.492 1 2l8 12h-7c-1.128 0-2 .843-2 2 0 1.073.929 2 2 2H0c1.639 0 2-1.012 2-2 0-.621-.635-1.52-1-2L-7 0h7Z"
        transform="translate(34 18)"
      />
      <Path
        fill="#4289c1"
        d="M0 0c.633 0 1-.353 1-1 0-.573-.458-1-1-1h-6c-.798 0-1 .367-1 1 0 .301.337.729.533 1L-2 6h-4c-.602 0-1 .384-1 1 0 .573.428 1 1 1h6c.874 0 1-.473 1-1 0-.331-.338-.877-.533-1.133L-4 0h4Z"
        transform="translate(18 13)"
      />
      <Path
        fill="#4289c1"
        d="M0 0c.633 0 1-.353 1-1 0-.573-.458-1-1-1h-6c-.798 0-1 .367-1 1 0 .301.337.729.533 1L-2 6h-4c-.602 0-1 .384-1 1 0 .572.428 1 1 1h6c.874 0 1-.473 1-1 0-.331-.338-.877-.533-1.133L-4 0h4Z"
        transform="translate(9 6)"
      />
    </Svg>
  );
};

export default SleepIcon;
