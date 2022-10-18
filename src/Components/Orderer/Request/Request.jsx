import * as Styled from '../styled.jsx';
import { DEFAULT, CUSTOM } from '../../../Constants.js';
import { CustomRequest } from './CustomRequest.jsx';
import { RequestList } from './RequestList/RequestList.jsx';
import { AddRequestList } from './RequestList/AddRequestList.jsx';

export const Request = ({ user, resultRequest, setResultRequest }) => {
  const onHandlerChangeSelect = event => {
    const { value } = event.target;
    console.log(value);

    setResultRequest(
      value === CUSTOM
        ? {
            request: '',
            custom: true,
          }
        : {
            request: value,
            custom: false,
          }
    );
  };

  return (
    <Styled.OrdererComponentWrap>
      <Styled.RequestSelect
        defaultValue={DEFAULT}
        onChange={onHandlerChangeSelect}
      >
        <Styled.RequestOtion value={DEFAULT} disabled hidden>
          선택해주세요.
        </Styled.RequestOtion>
        <AddRequestList additional_requests={user.additional_requests} />
        <RequestList />
      </Styled.RequestSelect>
      {resultRequest.custom ? (
        <CustomRequest setResultRequest={setResultRequest} />
      ) : (
        <></>
      )}
    </Styled.OrdererComponentWrap>
  );
};
