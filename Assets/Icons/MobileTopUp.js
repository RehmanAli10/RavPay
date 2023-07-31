import React from 'react';
import {Svg, Path} from 'react-native-svg';

const MobileTopUp = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox="0 0 100 100"
      id="mobile-uploading">
      <Path d="M70 5H30c-4.4 0-8 3.6-8 8v74c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8V13c0-4.4-3.6-8-8-8zM26 19h48v56H26V19zm4-10h40c2.2 0 4 1.8 4 4v2H26v-2c0-2.2 1.8-4 4-4zm40 82H30c-2.2 0-4-1.8-4-4v-8h48v8c0 2.2-1.8 4-4 4zm-6.6-44.6c-.4.4-.9.6-1.4.6s-1-.2-1.4-.6L52 37.8V61c0 1.1-.9 2-2 2s-2-.9-2-2V37.8l-8.6 8.6c-.8.8-2 .8-2.8 0-.8-.8-.8-2 0-2.8l12-12c.8-.8 2-.8 2.8 0l12 12c.8.8.8 2 0 2.8zM52 85c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
    </Svg>
  );
};

export default MobileTopUp;
