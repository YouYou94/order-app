import * as Styled from '../../styled.jsx';
import { POINT, FIXED, NONE } from '../../../../Constants.js';

const DEFAULT = {
  method: NONE,
  type: '',
  value: 0,
  name: '',
  price: 0,
};
export const PoingUsing = ({
  point,
  resultDiscount,
  setPoint,
  setResultDiscount,
  resultPrice,
}) => {
  const onHandlerPoint = event => {
    const { value } = event.target;
    const price = Number(value);
    setPoint(price);

    if (price > resultPrice) {
      alert('결제 금액보다 많습니다!');
      setPoint(0);
    }
    const resultdiscount =
      price > resultPrice
        ? DEFAULT
        : {
            method: POINT,
            type: FIXED,
            value: price,
            name: '포인트 사용',
            price: price,
          };

    setResultDiscount(resultdiscount);
  };

  return (
    <Styled.DiscountMethodInput
      type="number"
      step="100"
      min="1000"
      value={resultDiscount.method === POINT ? point : 0}
      onChange={onHandlerPoint}
    />
  );
};
