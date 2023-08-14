import { useState } from "react";
import "./Form.css"
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Form = (props) => {

  const [name, setName] = useState("")
  const [job, setJob] = useState("")
  const [picture, setPicture] = useState("")
  const [team, setTeam] = useState("")

  const [title, setTitle] = useState("")
  const [color, setColor] = useState("")

  const { registerCollaborator, createTeam } = props

  const handleSubmit = (e) => {
    e.preventDefault()
    let dataSend = {
      name,
      job,
      picture,
      team
    }
    registerCollaborator(dataSend)
  }

  const handleNewTeam = (e) => {
    e.preventDefault()
    createTeam({ title, color })
  }

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Rellena el formulario para crear el colaborador</h2>
        <CampoTexto
          titulo="Nombre"
          placeholder="Ingresar nombre"
          required
          value={name}
          setValue={setName}
        />
        <CampoTexto
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          value={job}
          setValue={setJob}
        />
        <CampoTexto
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          value={picture}
          setValue={setPicture}
        />
        <ListaOpciones
          value={team}
          setValue={setTeam}
          teams={props.teams}
        />
        <Boton>Crear</Boton>
      </form>
      <form onSubmit={handleNewTeam}>
        <h2>Rellena el formulario para crear el equipo</h2>
        <CampoTexto
          titulo="Título"
          placeholder="Ingresar título"
          required
          value={title}
          setValue={setTitle}
        />
        <CampoTexto
          titulo="Color"
          placeholder="Ingresar el color"
          required
          value={color}
          setValue={setColor}
        />
        <Boton>Registrar equipo</Boton>
      </form>
    </section>
  );
};

export default Form;