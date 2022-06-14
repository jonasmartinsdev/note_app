import { Container } from "./styles";

import { FiEdit, FiTrash} from 'react-icons/fi'
import { Link } from "react-router-dom";


export function Note({ title, description, bg_color, handleDeleteNote, onClick}) {
  return (
    <Container bg_color={bg_color}>
      <h2>{title}</h2>
      <p> {description}</p>
      <div>
       <button onClick={onClick}> <FiEdit color="#339CD8" size={24}/></button>
       <button onClick={() => handleDeleteNote()}> <FiTrash color="#d83364" size={24}/></button>
      </div>
    </Container>
  )
}