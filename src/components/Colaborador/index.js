import "./Colaborador.css"
import { AiFillCloseCircle as Delete } from "react-icons/ai"

const Collaborator = (props) => {
  const { name, job, picture } = props.data
  const { color, deleteCollaborator } = props

  return (
    <div className="collaborator">
      <Delete
        className="delete"
        onClick={deleteCollaborator}
      />
      <div
        className="header"
        style={{ backgroundColor: color }}
      >
        <img src={picture} alt={name} />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
      </div>
    </div>
  )
}

export default Collaborator