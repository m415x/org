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

  const {registerCollaborator} = props

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
    </section>
  );
};

export default Form;