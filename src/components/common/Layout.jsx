import styled from 'styled-components';

export const Layout = ({ children }) => {
  return <SectionLayout>{children}</SectionLayout>;
};

export const SectionLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 414px;

  padding: 16px;
  gap: 16px;

  background-color: white;
`;
