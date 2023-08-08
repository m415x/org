import "./ListaOpciones.css"

const ListaOpciones = (props) => {

  const handleChange = (e) => {
    props.setValue(e.target.value)
  }

  return (
    <div className="lista-opciones">
      <label>Equipo</label>
      <select
        value={props.value}
        onChange={handleChange}
      >
        <option 
          value="" 
          disabled 
          defaultValue="" 
          hidden
        >
          Seleccionar equipo
        </option>
        {
          props.teams.map((team, index) => <option key={index} value={team}>{team}</option>)
        }
      </select>
    </div>
  );
};

export default ListaOpciones;