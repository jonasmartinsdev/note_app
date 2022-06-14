import { Link } from "react-router-dom";
import { Button } from "../Button";
import { Container, Title } from "./styles";


export function Header({buttonActive}) {
  return (
    <Container>
      
     <Title to={'/'}>Notes</Title>

     {buttonActive && (
      <Link to={'/new'}>
        <Button title={'Criar nota'}/>
      </Link>
     )}  

    </Container>
  )
}