import { NONE } from '../../../Constants.js';
import * as Styled from '../styled.jsx';

export const DiscountHistory = ({ method, discountPrice }) => {
  if (method !== NONE)
    return (
      <Styled.OrderHistoryContent>
        <Styled.OrderHistoryLabel>* {method}</Styled.OrderHistoryLabel>
        <Styled.OrderHistoryLabel>
          - {discountPrice} 원
        </Styled.OrderHistoryLabel>
      </Styled.OrderHistoryContent>
    );
  else return null;
};
