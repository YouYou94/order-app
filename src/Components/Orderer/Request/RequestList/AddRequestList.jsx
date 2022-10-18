import * as Styled from '../../styled.jsx';

export const AddRequestList = ({ additional_requests }) => {
  const addRequestList = additional_requests.map(option => {
    return (
      <Styled.RequestOtion key={option} value={option || ''}>
        {option}
      </Styled.RequestOtion>
    );
  });
  return addRequestList;
};
