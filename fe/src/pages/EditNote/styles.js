import styled from "styled-components";


export const Container = styled.div`
  max-width: 113rem;
  margin: 0 auto;

`
export const Form = styled.form`
  max-width: 90rem;
  margin: 2rem auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

 > footer {
     margin-top: 2rem;
     
     display: flex;
     align-items: center;
     justify-content: space-between;

    button {
      width: 50%;
    }
  }

`