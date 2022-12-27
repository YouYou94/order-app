import { DiscountLabel, DiscountInput, DiscountButton } from '../index.jsx';
import styled from 'styled-components';

export function Point({ prop }) {
  return (
    <PointBox>
      <LabelBox>
        <DiscountLabel bold={400} color={'rgb(33, 33, 33)'}>
          포인트
        </DiscountLabel>
        <DiscountLabel bold={700} color={'rgb(150, 18, 231)'}>
          포인트 보유
        </DiscountLabel>
      </LabelBox>
      <InputBox>
        <DiscountInput />
        <DiscountButton>모두 사용</DiscountButton>
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
