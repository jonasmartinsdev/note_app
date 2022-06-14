import styled from "styled-components";


export const Container = styled.button`
  border: 0;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLUE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};

  padding: 1.3rem 2.4rem;

  border-radius: .8rem;
  
`