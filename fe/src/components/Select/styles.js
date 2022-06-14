import styled from "styled-components";


export const Container = styled.select`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  border-radius: .8rem;

  input {
    border: none;
    background: none;
    height: 5rem;
    width: 100%;

    padding: 1rem;


    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BLACK};
    }
  }
`