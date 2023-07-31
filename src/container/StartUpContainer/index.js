import React, {useState} from 'react';
import StartUpScreen from '../../screens/StartUpScreen/StartUpScreen';

const StartUpContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const isValidPhoneNumber = (phoneNumber || '').length === 13;

  return (
    <StartUpScreen
      phoneNumber={phoneNumber}
      isValidPhoneNumber={isValidPhoneNumber}
      setPhoneNumber={setPhoneNumber}
    />
  );
};

export default StartUpContainer;
