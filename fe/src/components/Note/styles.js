import styled from "styled-components";


export const Container = styled.div`
   max-width: 40rem;
   width: 100%;

   background-color: ${({ bg_color }) => bg_color};

   padding: 2rem;

   border-radius: .8rem;
  
   div {
    margin-top: 1rem;
    text-align: end;
   }

   button {
    margin-right: .6rem;
    border: 0;
    background: none;
   }

`