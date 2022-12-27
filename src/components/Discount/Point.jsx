import { DiscountLabel, DiscountInput, DiscountButton } from '../index.jsx';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { UserContext } from '../../App.js';
import { POINT, FIXED } from '../../Constants.js';

export function Point({ prop }) {
  const { user } = useContext(UserContext);
  const { result, setResult } = prop;
  const [point, setPoint] = useState();

  // 유효성 검사 체크리스트
  // 숫자만 입력 가능 (v)
  // 보유 포인트보다 작게 ()
  const onHandlerChangePoint = event => {
    const { value } = event.target;

    const check = /^[0-9]+$/;

    if (!check.test(value)) {
      alert('숫자만 입력 가능합니다.');
      setPoint(0);
    } else {
      setPoint(Number(value));

      setResult({
        ...result,
        discount: {
          method: POINT,
          type: FIXED,
          value: point,
          name: '포인트 사용',
          price: point,
        },
      });
    }
  };

  // 유효성 검사 체크리스트
  // 총 금액보다 작거나 같게 ()
  const onHandlerClickPointAll = () => {
    setPoint(user.points);

    setResult({
      ...result,
      discount: {
        method: POINT,
        type: FIXED,
        value: point,
        name: '포인트 사용',
        price: point,
      },
    });
  };

  return (
    <PointBox>
      <LabelBox>
        <DiscountLabel bold={400} color={'rgb(33, 33, 33)'}>
          포인트
        </DiscountLabel>
        <DiscountLabel bold={700} color={'rgb(150, 18, 231)'}>
          포인트 {user.points.toLocaleString('ko-KR')}보유
        </DiscountLabel>
      </LabelBox>
      <InputBox>
        <DiscountInput
          value={result.discount.method === POINT ? point : ''}
          onHandler={onHandlerChangePoint}
        />
        <DiscountButton onHandler={onHandlerClickPointAll}>
          모두 사용
        </DiscountButton>
      </InputBox>
    </PointBox>
  );
}

export const PointBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 382px;
  height: 78px;

  gap: 8px;

  padding: 7px;
  border: 1px solid rgb(230, 230, 230);

  background-color: rgb(245, 245, 245);
`;

export const LabelBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 366px;
  heigth: 14px;

  gap: 4px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: row;

  width: 366px;
  heigth: 40px;

  gap: 8px;
`;
