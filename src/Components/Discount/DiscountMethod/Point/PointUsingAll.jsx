import * as Styled from '../../styled.jsx';
import { POINT, FIXED } from '../../../../Constants.js';

export const PoingUsingAll = ({
  user,
  resultPrice,
  setPoint,
  setResultDiscount,
}) => {
  const onHandlerPointAll = () => {
    if (Number(user.points) > resultPrice) {
      setPoint(resultPrice);
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: resultPrice,
        name: '포인트 사용',
      });
    } else {
      setPoint(Number(user.points));
      setResultDiscount({
        method: POINT,
        type: FIXED,
        value: Number(user.points),
        name: '포인트 사용',
      });
    }
  };

  return (
    <Styled.DiscountMethodBtn onClick={onHandlerPointAll}>
      모두 사용
    </Styled.DiscountMethodBtn>
  );
};
