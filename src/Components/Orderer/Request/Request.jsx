import * as Styled from '../styled.jsx';
import { REQUESTLIST, DEFAULT, CUSTOM } from '../../../Constants.js';
import { CustomRequest } from './CustomRequest.jsx';

export const Request = ({ resultRequest, setResultRequest }) => {
  const option = REQUESTLIST.map(data => {
    return (
      <Styled.RequestOtion key={data.id} value={data.value}>
        {data.label}
      </Styled.RequestOtion>
    );
  });

  const onHandlerChangeSelect = event => {
    const { value } = event.target;

    if (value === CUSTOM) {
      setResultRequest({
        request: '',
        custom: true,
      });
    } else {
      setResultRequest({
        request: event.target[value].innerText,
        custom: false,
      });
    }
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
        {option}
      </Styled.RequestSelect>
      {resultRequest.custom ? (
        <CustomRequest setResultRequest={setResultRequest} />
      ) : (
        <></>
      )}
    </Styled.OrdererComponentWrap>
  );
};
