import styled from 'styled-components';

export const Title = ({ children }) => {
  return <SectionTitle>{children}</SectionTitle>;
};

export const SectionTitle = styled.h1`
  width: 382px;
  height: 23px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;

  color: rgb(33, 33, 33);
`;
