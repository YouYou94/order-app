import styled from 'styled-components';
import { CUSTOM, DEFAULT } from '../../Constants';

export function OrderRequest({ children }) {
  return <RequestBox>{children}</RequestBox>;
}

export function RequestList({ prop }) {
  const { list } = prop.result.request;
  const { result, setResult } = prop;

  const onHandlerChangeSelect = event => {
    const { value } = event.target;

    setResult(
      value === CUSTOM
        ? {
            ...result,
            request: {
              ...result.request,
              custom: true,
              user_request: '',
            },
          }
        : {
            ...result,
            request: {
              ...result.request,
              custom: false,
              user_request: value,
            },
          }
    );
  };

  return (
    <RequestSelect onChange={onHandlerChangeSelect}>
      {list.map(item => {
        const { id, value, label } = item;

        return value === DEFAULT ? (
          <RequestItem key={id} value={value} hidden>
            {label}
          </RequestItem>
        ) : (
          <RequestItem key={id} value={value}>
            {label}
          </RequestItem>
        );
      })}
    </RequestSelect>
  );
}

export function RequestCustom({ prop }) {
  const { result, setResult } = prop;
  const { user_request } = result.request;

  const onHandlerChangeCustom = event => {
    const { value } = event.target;

    setResult({
      ...result,
      request: {
        ...result.request,
        user_request: value,
      },
    });
  };

  return (
    <>
      <CustomArea value={user_request} onChange={onHandlerChangeCustom} />
      <CustomTextLength> {user_request.length} / 60</CustomTextLength>
    </>
  );
}

export const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 8px;
`;

export const RequestSelect = styled.select`
  box-sizing: border-box;

  width: 382px;
  height: 35px;

  padding: 7px 12px;
  border: 1px solid rgb(204, 204, 204);

  outline: none;
`;

export const RequestItem = styled.option`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: rgb(33, 33, 33);
`;

export const CustomArea = styled.textarea`
  box-sizing: border-box;

  width: 382px;
  height: 128px;

  padding: 7px 12px;
  border: 1px solid rgb(204, 204, 204);

  outline: none;
`;

export const CustomTextLength = styled.span`
  width: 382px;
  height: 14px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  text-align: right;

  color: rgb(33, 33, 33);
`;
