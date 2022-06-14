import { Container } from "./styles"
import { FiPlus } from 'react-icons/fi'
import { useState } from "react";

export function ListColors({handleColorSelect, color }) {

  const colors = ['#fadeb2', '#9ad6f2', '#c9fab2', '#f2b2fa']
  const [listOpen, setListOpen] = useState(false);
 
  return (
    <Container>
      <span style={{backgroundColor: color }}>Cor de fundo da nota</span>
      
      <FiPlus onClick={() => setListOpen(true)} size={25} />
      
      <ul className={`sidebar_list ${listOpen ? "sidebar_list_active" : ""}`}>
        {colors.map((item, index) => (
          <li
            key={index}
            className="sidebar_list_item"
            style={{ backgroundColor: item }}
            onClick={() => handleColorSelect(item)}
          />
        ))}
      </ul>

    </Container>
  )
}