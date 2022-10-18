import { REQUESTLIST } from '../../../../Constants.js';
import * as Styled from '../../styled.jsx';

export const RequestList = () => {
  const requestList = REQUESTLIST.map(data => {
    return (
      <Styled.RequestOtion key={data.id} value={data.value}>
        {data.label}
      </Styled.RequestOtion>
    );
  });

  return requestList;
};
