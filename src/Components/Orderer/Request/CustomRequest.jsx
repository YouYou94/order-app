import { useState } from 'react';
import * as Styled from '../styled.jsx';

export const CustomRequest = ({ setResultRequest }) => {
  const [custom, setCustom] = useState('');

  return (
    <>
      <Styled.CustomRequestTextArea value={custom} />
      <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
    </>
  );
};
