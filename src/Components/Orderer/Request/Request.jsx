import * as Styled from '../styled.jsx';
import { REQUESTLIST, DEFAULT } from '../../../Constants.js';
import { CustomRequest } from './CustomRequest.jsx';

export const Request = ({ resultOrderer, setResultOrderer }) => {
  const option = REQUESTLIST.map(data => {
    return (
      <Styled.RequestOtion key={data.id} value={data.value}>
        {data.label}
      </Styled.RequestOtion>
    );
  });
  return (
    <Styled.OrdererComponentWrap>
      <Styled.RequestSelect defaultValue={DEFAULT}>
        <Styled.RequestOtion value={DEFAULT} disabled hidden>
          선택해주세요.
        </Styled.RequestOtion>
        {option}
      </Styled.RequestSelect>
      <CustomRequest />
    </Styled.OrdererComponentWrap>
  );
};
