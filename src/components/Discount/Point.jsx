import { DiscountLabel, DiscountInput, DiscountButton } from '../index.jsx';
import styled from 'styled-components';
import { useContext, useState } from 'react';
import { UserContext } from '../../App.js';
import { POINT, FIXED, NONE } from '../../Constants.js';

export function Point({ prop }) {
  const { user } = useContext(UserContext);
  const { result, setResult } = prop;
  const totalPrice = result.totalPrice;
  const [point, setPoint] = useState();

  // 유효성 검사 체크리스트
  // 숫자만 입력 가능 (v)
  // 보유 포인트보다 작게 (v)
  // 총 결제 금액보다 작게 ()
  const onHandlerChangePoint = event => {
    const { value } = event.target;

    let valid = true;

    const check = /^[0-9]+$/;

    if (value > user.points) {
      alert('보유 포인트보다 적습니다!');
      valid = false;
    }

    if (value > totalPrice) {
      alert('결제 금액보다 많습니다!');
      valid = false;
    }

    if (!check.test(value)) {
      alert('숫자만 입력 가능합니다.');
      valid = false;
    }

    setPoint(valid ? Number(value) : 0);

    setResult({
      ...result,
      discount: {
        method: valid ? POINT : NONE,
        type: valid ? FIXED : '',
        value: valid ? Number(value) : 0,
        name: valid ? POINT : '',
        price: valid ? Number(value) : 0,
      },
    });
  };

  // 유효성 검사 체크리스트
  // 포인트가 존재할 경우 실행하기(v)
  // 총 금액보다 작거나 같게 ()
  const onHandlerClickPointAll = () => {
    if (user.points <= 0) {
      alert('잔여 포인트가 없습니다.');
      return;
    }

    setPoint(Number(user.points));

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
          {user.points.toLocaleString('ko-KR')} 포인트 보유
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
