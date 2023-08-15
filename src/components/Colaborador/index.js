import "./Colaborador.css"
import { AiFillCloseCircle as Delete, AiOutlineHeart as UnLike, AiFillHeart as Like } from "react-icons/ai"

const Collaborator = (props) => {
  const { name, job, picture, id, fav } = props.data
  const { color, deleteCollaborator, like } = props

  return (
    <div className="collaborator">
      <Delete
        className="delete"
        onClick={() => deleteCollaborator(id)}
      />
      <div
        className="header"
        style={{ backgroundColor: color }}
      >
        <img
          src={picture}
          alt={name}
        />
      </div>
      <div className="info">
        <h4>{name}</h4>
        <h5>{job}</h5>
        {
          fav ? <Like color="red" onClick={() => like(id)} /> : <UnLike onClick={() => like(id)} />
        }
      </div>
    </div>
  )
}

export default Collaborator