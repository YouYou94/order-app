import styled from 'styled-components';

export const Layout = ({ isResult, children }) => {
  return <SectionLayout isResult={isResult}>{children}</SectionLayout>;
};

export const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 414px;

  ${prop => (prop.isResult ? 'padding-top: 24px' : 'padding:16px')};
  gap: 16px;

  background-color: white;
`;
