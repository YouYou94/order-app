import * as Styled from '../../styled.jsx';
import { POINT, FIXED } from '../../../../Constants.js';

export const PoingUsingAll = ({
  points,
  resultPrice,
  setPoint,
  setResultDiscount,
}) => {
  const onHandlerPointAll = () => {
    setPoint(points > resultPrice ? resultPrice : points);
    setResultDiscount(
      points > resultPrice
        ? {
            method: POINT,
            type: FIXED,
            value: resultPrice,
            name: '포인트 사용',
            price: resultPrice,
          }
        : {
            method: POINT,
            type: FIXED,
            value: points,
            name: '포인트 사용',
            price: points,
          }
    );
  };

  return (
    <Styled.DiscountMethodBtn onClick={onHandlerPointAll}>
      모두 사용
    </Styled.DiscountMethodBtn>
  );
};
