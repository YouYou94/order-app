import { useState } from 'react';
import { CUSTOM, DEFAULT, REQUESTLIST } from '../../Constants.js';
import { SubTitle } from '../common/Title.jsx';
import * as Styled from './Styled.jsx';

export default function OrderRequest() {
  const [isCustom, setIsCustom] = useState(false);

  const onHandlerChangeSelect = event => {
    const { value } = event.target;

    if (value === CUSTOM) setIsCustom(true);
    else setIsCustom(false);
  };

  const requestList = REQUESTLIST.map(option => {
    return option.id === DEFAULT ? (
      <Styled.RequestOption
        key={option.id}
        value={option.value}
        disabled
        hidden
      >
        {option.label}
      </Styled.RequestOption>
    ) : (
      <Styled.RequestOption key={option.id} value={option.value}>
        {option.label}
      </Styled.RequestOption>
    );
  });

  return (
    <Styled.RequestBox>
      <SubTitle bold={700}>주문 요청 사항</SubTitle>
      <Styled.RequestSelect
        defaultValue={DEFAULT}
        onChange={onHandlerChangeSelect}
      >
        {requestList}
      </Styled.RequestSelect>
      {isCustom ? (
        <>
          <Styled.CustomArea />
          <Styled.TextLength>0 / 60</Styled.TextLength>
        </>
      ) : (
        <></>
      )}
    </Styled.RequestBox>
  );
}
