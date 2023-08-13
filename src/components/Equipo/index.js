import "./Equipo.css"
import Collaborator from "../Colaborador"

const Team = (props) => {

  // Destructuración
  const {title, color, bgColor} = props.data
  const {collaborators, deleteCollaborator} = props

  return <>
    {
      collaborators.length > 0 &&
      <section className="team" style={{backgroundColor: bgColor}}>
        <h3 style={{borderColor: color}}>{title}</h3>
        <div className="collaborators">
          {
            collaborators.map((collaborator, index) => <Collaborator 
              data={collaborator}
              key={index}
              color={color}
              deleteCollaborator={deleteCollaborator}
            />)
          }
        </div>
      </section>
    }
  </>
  }

export default Team