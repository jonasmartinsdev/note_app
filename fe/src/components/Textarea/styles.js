import styled from "styled-components";


export const Container = styled.textarea`
  width: 100%;
  height: 20rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border: 0;

  padding: 1rem;

  resize: none;

  
  border-radius: .8rem;


  &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLACK};
  }
`