import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Org from './components/Org';
import Team from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [showForm, updateShow] = useState(false)
  const [collaborators, updateCollaborators] = useState([{
    id: uuid(),
    team: "Front End",
    picture: "https://github.com/m415x.png",
    name: "Cristian Lahoz",
    job: "Estudiante"
  }])
  const [teams, setTeams] = useState([
    {
      id: uuid(),
      title: "Programación",
      color: "#57C278",
      bgColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      color: "#82CFFA",
      bgColor: "#E8F8FF"
    },
    {
      id: uuid(),
      title: "Data Science",
      color: "#A6D157",
      bgColor: "#F0F8E2"
    },
    {
      id: uuid(),
      title: "DevOps",
      color: "#E06B69",
      bgColor: "#FDE7E8"
    },
    {
      id: uuid(),
      title: "UX y Diseño",
      color: "#DB6EBF",
      bgColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Móvil",
      color: "#FFBA05",
      bgColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Innovación y Gestión",
      color: "#FF8A29",
      bgColor: "#FFEEDF"
    }
  ])

  const switchShow = () => {
    updateShow(!showForm)
  }

  // Registrar colaborador
  const registerCollaborator = (collaborator) => {
    // Spread operator
    updateCollaborators([...collaborators, collaborator])
  }

  // Eliminar colaborador
  const deleteCollaborator = (id) => {
    const newCollaborators = collaborators.filter((collaborator) => collaborator.id !== id)
    updateCollaborators(newCollaborators)
  }

  // Actualizar color de equipo
  const setColor = (color, id) => {
    const updatedTeams = teams.map((team) => {
      if (team.id === id) {
        team.color = color
      }
      return team
    })
    setTeams(updatedTeams)
  }

  // Crear equipo
  const createTeam = (newTeam) => {
    setTeams([...teams, {...newTeam, id: uuid}])
  }

  return (
    <div>
      <Header />
      {/* {Ternario --> condicion ? seMuestra : noSeMuestra} */}
      {/* {showForm ? <Form /> : <></>} */}
      {/* {condicion && seMuestra} */}
      {
        showForm &&
        <Form
          teams={teams.map((team) => team.title)}
          registerCollaborator={registerCollaborator}
          createTeam={createTeam}
        />
      }
      <Org switchShow={switchShow} />
      {
        teams.map((team) => <Team
          key={team.title}
          data={team}
          collaborators={collaborators.filter(collaborator => collaborator.team === team.title)}
          deleteCollaborator={deleteCollaborator}
          setColor={setColor}
        />)
      }
      <Footer />
    </div>
  )
}

export default App
