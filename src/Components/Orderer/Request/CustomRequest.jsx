import { useState } from 'react';
import * as Styled from '../styled.jsx';

export const CustomRequest = ({ setResultRequest }) => {
  const [custom, setCustom] = useState('');

  const onHandlerChangeCustom = event => {
    const { value } = event.target;
    setCustom(value);
    setResultRequest(current => ({
      ...current,
      request: value,
    }));
  };

  return (
    <>
      <Styled.CustomRequestTextArea
        value={custom}
        onChange={onHandlerChangeCustom}
      />
      <Styled.CustomTextLength>{custom.length}/60</Styled.CustomTextLength>
    </>
  );
};
