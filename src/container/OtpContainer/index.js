import React from 'react';
import OtpScreen from '../../screens/OtpScreen/OtpScreen';

const OtpContainer = ({route}) => {
  const {phoneNumber} = route.params;
  return <OtpScreen phoneNumber={phoneNumber} />;
};

export default OtpContainer;
