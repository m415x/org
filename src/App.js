import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import MiOrg from './components/MiOrg';
import Team from './components/Equipo';

function App() {
  
  const [showForm, updateShow] = useState(false)

  const switchShow = () => {
    updateShow(!showForm)
  }

  // Lista de equipos
  const teams = [
    {
      title: "Programación",
      color: "#57C278",
      bgColor: "#D9F7E9"
    },
    {
      title: "Front End",
      color: "#82CFFA",
      bgColor: "#E8F8FF"
    },
    {
      title: "Data Science",
      color: "#A6D157",
      bgColor: "#F0F8E2"
    },
    {
      title: "DevOps",
      color: "#E06B69",
      bgColor: "#FDE7E8"
    },
    {
      title: "UX y Diseño",
      color: "#DB6EBF",
      bgColor: "#FAE9F5"
    },
    {
      title: "Móvil",
      color: "#FFBA05",
      bgColor: "#FFF5D9"
    },
    {
      title: "Innovación y Gestión",
      color: "#FF8A29",
      bgColor: "#FFEEDF"
    }
  ];

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
        />
      }
      <MiOrg switchShow={switchShow} />
      {
        teams.map((team) => <Team key={team.title} data={team} />)
      }
    </div>
  );
};

export default App;
