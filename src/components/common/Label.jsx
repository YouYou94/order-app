import styled from 'styled-components';

export const DiscountLabel = ({ bold, color, children }) => {
  return (
    <DiscountMethodLabel bold={bold} color={color}>
      {children}
    </DiscountMethodLabel>
  );
};

export const CouponLabel = ({
  bold,
  size,
  lineheight,
  isFlex,
  color,
  children,
  id,
}) => {
  return (
    <CouponValueLabel
      bold={bold}
      size={size}
      lineheight={lineheight}
      isFlex={isFlex}
      color={color}
      id={id}
    >
      {children}
    </CouponValueLabel>
  );
};

export const DiscountMethodLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${prop => prop.bold};
  font-size: 12px;
  line-height: 14px;

  color: ${prop => prop.color};
`;

export const CouponValueLabel = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${prop => prop.bold};
  font-size: ${prop => prop.size}px;
  line-height: ${prop => prop.lineheight}px;

  ${prop => (prop.isFlex ? 'display:flex; align-items:flex-end;' : '')}

  color: ${prop => prop.color};
`;
