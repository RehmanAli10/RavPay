import React from 'react';
import {Svg, Path} from 'react-native-svg';

const BriefCaseIcon = ({height, width}) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      id="briefcase"
      height={height}
      width={width}>
      <Path d="M35 6c0-2.757-2.243-5-5-5H20c-2.757 0-5 2.243-5 5v3H1v17h2v23h44V26h2V9H35V6zM17 6c0-1.654 1.346-3 3-3h10c1.654 0 3 1.346 3 3v3H17V6zM5 42.09A6.007 6.007 0 0 1 9.91 47H5v-4.91zM40.09 47A6.007 6.007 0 0 1 45 42.09V47h-4.91zM45 40.069A8.007 8.007 0 0 0 38.069 47H11.931A8.008 8.008 0 0 0 5 40.069V26h14v6h5v2h2v-2h5v-6h14v14.069zM24 28v2h-3v-4h8v4h-3v-2h-2zm23-4H3V11h44v13z" />
    </Svg>
  );
};

export default BriefCaseIcon;
