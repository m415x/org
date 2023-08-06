import "./CampoTexto.css"

const CampoTexto = (props) => {

  const placeholderModify = `${props.placeholder}...`

  const handleChange = (e)=> {
    props.setValue(e.target.value)
  }

  return (
    <div className="campo-texto">
      <label>{props.titulo}</label>
      <input 
        placeholder={placeholderModify} 
        required={props.required} 
        value={props.value}
        onChange={handleChange}
      />
    </div>
  )
}

export default CampoTexto