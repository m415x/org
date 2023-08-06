import "./ListaOpciones.css"

const ListaOpciones = (props) => {

  const teams = [
    "Programación",
    "Front End",
    "Data Science",
    "DevOps",
    "UX y Diseño",
    "Móvil",
    "Innovación y Gestión"
  ];

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
        {teams.map( (team, index) => <option key={index} value={team}>{team}</option>)}
      </select>
    </div>
  );
};

export default ListaOpciones;