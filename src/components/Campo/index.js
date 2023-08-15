import "./Campo.css"

const Field = (props) => {

  const placeholderModify = `${props.placeholder}...`

  // Destructuración
  const { type = "text" } = props

  const handleChange = (e) => {
    props.setValue(e.target.value)
  }

  return (
    <div className={`campo campo-${type}`}>
      <label>{props.titulo}</label>
      <input
        placeholder={placeholderModify}
        required={props.required}
        value={props.value}
        onChange={handleChange}
        type={type}
      />
    </div>
  )
}

export default Field