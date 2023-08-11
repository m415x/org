import "./Colaborador.css"

const Collaborator = (props) => {
  const {name, job, picture, team} = props.data
  const {color} = props

  return (
    <div className="collaborator">
      <div className="header" style={{backgroundColor: color}}>
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