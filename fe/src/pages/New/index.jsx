import { api } from "../../services/api";

import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ListColors } from "../../components/ListColors";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { useNavigate } from "react-router-dom";


export function New() {
  const [title, setTitle] = useState('')
  const [description, setDescription ] = useState('')
  const [color, setColor] = useState('')

  const navigate = useNavigate()
   
  function handleColorSelect(color) {
   setColor(color)
  }
  
async function handleNewNote() {
    if(!title || !description ) {
     return alert("Você precisa preencher todos os campos.")
    }
    if(!color) {
      return alert("Você precisa selecionar uma cor para a sua nota.")
    }

     await api.post("/notes", {
      title,
      description, 
      bg_color: color
      })

      alert("Nota criada com sucesso!")
      
      navigate('/')
  }
  return (
    <Container>
      <Header />
      <Form>
        <Input 
          placeholder="Titulo"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <Textarea 
          placeholder="Observações"
          onChange={e => setDescription(e.target.value)}
          />

        <footer>
          <ListColors handleColorSelect={handleColorSelect} color={color}/>

          <Button title={'Salvar'} onClick={handleNewNote}/>
        </footer>
      </Form>
    </Container>
  )
}