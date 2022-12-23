import { DEFAULT, REQUESTLIST } from '../../Constants.js';
import { SubTitle } from '../common/Title.jsx';
import * as Styled from './Styled.jsx';

export default function OrderRequest() {
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
      <Styled.RequestSelect defaultValue={DEFAULT}>
        {requestList}
      </Styled.RequestSelect>
    </Styled.RequestBox>
  );
}
