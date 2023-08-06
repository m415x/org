import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import MiOrg from './components/MiOrg';

function App() {
  
  const [showForm, updateShow] = useState(true)

  const switchShow = () => {
    updateShow(!showForm)
  }

  return (
    <div>
      <Header />
      {/* {Ternario --> condicion ? seMuestra : noSeMuestra} */}
      {/* {showForm ? <Form /> : <></>} */}
      {/* {condicion && seMuestra} */}
      {showForm && <Form />}
      <MiOrg switchShow={switchShow} />
    </div>
  );
};

export default App;
