import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled.div`
  height: 10rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled(Link)`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.COLORS.BLACK};
`