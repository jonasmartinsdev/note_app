import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Home() {
  const [ notes, setNotes ] = useState([])

  const navigate = useNavigate()

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get('/notes')
      setNotes(response.data)
    }
    fetchNotes()
  }, [])

  async function handleDeleteNote(noteId) {
    const confirm = window.confirm('Tem certeza que deseja remover?')
   
    if(confirm) {
      await api.delete(`/notes/${noteId}`)
      setNotes(prevState => prevState.filter(note =>  note.id !== noteId))
    }
  }

  function handleDetails(id) {
    navigate(`/edit/${id}`)
  }

  return (
    <Container>
       <Header buttonActive />
    <main>

      {
        notes.map(note => (
        <Note
          key={String(note.id)}
          title={note.title}
          description={note.description}
          bg_color={note.bg_color}
          onClick={() => handleDetails(note.id)}
          handleDeleteNote={() => handleDeleteNote(note.id)}
        />
        ))
      }
    
    </main>

      
    </Container>
  )
}