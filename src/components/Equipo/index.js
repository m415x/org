import "./Equipo.css"
import Collaborator from "../Colaborador"

const Team = (props) => {

  // Destructuración
  const {title, color, id} = props.data
  const {collaborators, deleteCollaborator, setColor} = props

  return <>
    {
      collaborators.length > 0 &&
      <section className="team" style={{backgroundColor: `${color}99`}}>
        <input
          type="color"
          className="input-color"
          value={color}
          onChange={(e) => {
            setColor(e.target.value, id)
          }}
        />
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