import styled from 'styled-components';

export const DiscountLabel = ({ bold, color, children }) => {
  return (
    <DiscountMethodLabel bold={bold} color={color}>
      {children}
    </DiscountMethodLabel>
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
