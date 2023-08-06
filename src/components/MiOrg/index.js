// import { useState } from "react"
import "./MiOrg.css"

const MiOrg =(props) => {
  //Estado - hooks => useState
  //const [nombreVariable, funcionActualiza] =  useState(valorInicial)
  // const [show, updateShow] = useState(true)
  // const handleClick = () => {
  //   updateShow(!show) //switch
  // }

  return (
    <section className="orgSection">
      <h3>Mi organización</h3>
      <img src="/img/add.png" alt="add" onClick={props.switchShow}/>
    </section>
  )
}

export default MiOrg