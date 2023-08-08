import "./Equipo.css"
import Collaborator from "../Colaborador"

const Team = (props) => {

  // Destructuración
  const {title, color, bgColor} = props.data

  return (
    <section className="team" style={{backgroundColor: bgColor}}>
      <h3 style={{borderColor: color}}>{title}</h3>
      <div className="collaborators">
        <Collaborator />
        <Collaborator />
        <Collaborator />
        <Collaborator />
        <Collaborator />
        <Collaborator />
      </div>
    </section>
  )
}

export default Team