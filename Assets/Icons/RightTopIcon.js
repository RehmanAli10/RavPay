import React from 'react';
import {Svg, Path} from 'react-native-svg';

const RightTopIcon = ({height, width, fill}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      id="right-top"
      height={height}
      width={width}>
      <Path
        fill={fill}
        d="M58.4 54.71h-.12a4.322 4.322 0 0 1-4.2-4.44l1.15-41.49-41.49 1.15c-2.38.09-4.38-1.82-4.44-4.2a4.317 4.317 0 0 1 4.2-4.44L59.56 0c1.2-.03 2.34.42 3.18 1.26.84.84 1.3 1.99 1.26 3.18L62.72 50.5a4.331 4.331 0 0 1-4.32 4.21z"
      />
      <Path
        fill={fill}
        d="M4.32 64a4.3 4.3 0 0 1-3.06-1.27 4.327 4.327 0 0 1 0-6.12L56.62 1.27a4.327 4.327 0 1 1 6.12 6.12L7.38 62.73C6.54 63.58 5.43 64 4.32 64z"
      />
    </Svg>
  );
};

export default RightTopIcon;
