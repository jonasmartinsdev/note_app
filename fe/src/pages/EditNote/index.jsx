import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ListColors } from "../../components/ListColors";
import { Textarea } from "../../components/Textarea";
import { api } from "../../services/api";
import { Container, Form } from "./styles";


export function EditNote() {
  const params = useParams()
  const navigate = useNavigate()
  
  const [data, setData] = useState(null) 
  const [title, setTitle] = useState('') 
  const [description, setDescription] = useState('') 
  const [color, setColor] = useState('')
  
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)      
      setData(response.data)
    }

    fetchNote()
  }, [])


  function handleColorSelect(color) {
    setColor(color)
   }

 async function handleUpdateNote() {
    
  await api.put(`/notes/${params.id}`, {
      title: title ? title : data.title,
      description: description ? description : data.description,
      bg_color: color
    })    

    alert("Atualizado com sucesso!")
    navigate('/')
  }

  return (
    <Container>
      <Header />
      {
        data &&
          <Form>

          <Input 
            placeholder="Titulo"
            defaultValue={data.title}
            onChange={ (e) => {setTitle(e.target.value)}}
          />

          <Textarea 
            placeholder="Descrição"
            defaultValue={data.description}
            onChange={ (e) => {setDescription(e.target.value)}}
          />
    
          <footer>
            <ListColors 
              color={color ? color : data.bg_color} 
              handleColorSelect={handleColorSelect} 
            />
  
            <Button 
              title={'Salvar alterações'}
              onClick={handleUpdateNote}
            />
          </footer>
        </Form>
      }
    </Container>
  )
}