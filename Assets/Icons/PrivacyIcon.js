import React from 'react';
import {Svg, Path} from 'react-native-svg';

const PrivacyIcon = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      data-name="Layer 49"
      viewBox="0 0 24 24"
      height={height}
      width={width}
      id="privacy">
      <Path d="M18 8h-1V7A5 5 0 0 0 7 7v1H6a1 1 0 0 0-1 1v7.764a2.985 2.985 0 0 0 1.658 2.684l4.895 2.447a1 1 0 0 0 .895 0l4.895-2.447A2.985 2.985 0 0 0 19 16.764V9a1 1 0 0 0-1-1ZM9 7a3 3 0 0 1 6 0v1H9V7Zm8 9.764a.994.994 0 0 1-.553.895L12 19.882l-4.447-2.224A.994.994 0 0 1 7 16.764V10h10v6.764Z" />
      <Path d="M12 12a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z" />
    </Svg>
  );
};

export default PrivacyIcon;
