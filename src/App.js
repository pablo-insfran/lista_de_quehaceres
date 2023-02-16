import './App.css';
import { useState } from 'react';
import List from './components/List';
import Forms from './components/Forms';

function App() {

  const [tarea, setTarea] = useState([
    {
      nombre: "Get Python black belt.",
      completado: true
    },
    {
      nombre: "Get MERN black belt.",
      completado: false
    }
  ]);

  return (
    <div className="App">

      <Forms tarea = {tarea} setTarea = {setTarea}/>
      <List tarea = {tarea} setTarea = {setTarea}/>
      
    </div>
  );
}

export default App;
