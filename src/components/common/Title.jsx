import styled from 'styled-components';

export const SectionTitle = ({ children }) => {
  return <MainTitle>{children}</MainTitle>;
};

export const SectionSubTitle = ({ bold, children }) => {
  return <SubTitle bold={bold}>{children}</SubTitle>;
};

export const MainTitle = styled.h1`
  width: 382px;
  height: 23px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: #212121;
`;

export const SubTitle = styled.h2`
  width: 382px;
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: ${props => props.bold};
  font-size: 16px;
  line-height: 19px;

  color: #212121;
`;
