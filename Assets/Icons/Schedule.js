import React from 'react';
import {Svg, Path} from 'react-native-svg';

const Schedule = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id="schedule"
      height={height}
      width={width}>
      <Path d="M27 5h-4V3a1 1 0 0 0-2 0v2H11V3a1 1 0 0 0-2 0v2H5a3 3 0 0 0-3 3v19a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3ZM4 8a1 1 0 0 1 1-1h22a1 1 0 0 1 1 1v1H4Zm23 20H5a1 1 0 0 1-1-1V11h24v16a1 1 0 0 1-1 1Z" />
      <Path d="M13 12H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm-5 5v-3h5v3zm5 3H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm-5 5v-3h5v3zm16-13h-5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm-5 5v-3h5v3zm5 3h-5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2zm-5 5v-3h5v3z" />
    </Svg>
  );
};

export default Schedule;
