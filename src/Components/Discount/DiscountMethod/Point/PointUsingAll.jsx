import * as Styled from '../../styled.jsx';
import { POINT, FIXED } from '../../../../Constants.js';

export const PoingUsingAll = ({
  points,
  resultPrice,
  setPoint,
  setResultDiscount,
}) => {
  const onHandlerPointAll = () => {
    if (Number(points) > resultPrice) {
      setPoint(resultPrice);
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: resultPrice,
        name: '포인트 사용',
        price: Number(resultPrice),
      });
    } else {
      setPoint(Number(points));
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: Number(points),
        name: '포인트 사용',
        price: Number(points),
      });
    }
  };

  return (
    <Styled.DiscountMethodBtn onClick={onHandlerPointAll}>
      모두 사용
    </Styled.DiscountMethodBtn>
  );
};
