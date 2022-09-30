import * as Styled from './styled.jsx';
import { REQUESTLIST } from '../../Constants.js';

export const Request = () => {
  console.log(REQUESTLIST);
  return (
    <Styled.OrdererComponentWrap>
      <Styled.RequestSelect></Styled.RequestSelect>
    </Styled.OrdererComponentWrap>
  );
};
