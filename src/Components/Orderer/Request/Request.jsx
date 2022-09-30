import * as Styled from '../styled.jsx';
import { REQUESTLIST } from '../../../Constants.js';

export const Request = () => {
  const option = REQUESTLIST.map(data => {
    return (
      <Styled.RequestOtion key={data.id} value={data.value}>
        {data.label}
      </Styled.RequestOtion>
    );
  });
  return (
    <Styled.OrdererComponentWrap>
      <Styled.RequestSelect>{option}</Styled.RequestSelect>
    </Styled.OrdererComponentWrap>
  );
};
