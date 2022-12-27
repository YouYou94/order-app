import styled from 'styled-components';

export const Title = ({ children, align }) => {
  return <MainText align={align}>{children}</MainText>;
};

export const SubTitle = ({ children }) => {
  return <SubText>{children}</SubText>;
};

export const MainText = styled.h1`
  width: 382px;
  height: 23px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  text-align: ${prop => prop.align};

  color: rgb(33, 33, 33);
`;

export const SubText = styled.h2`
  width: 382px;
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;

  color: rgb(33, 33, 33);
`;
