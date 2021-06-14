import { useState } from 'react';
import './App.css';
import Button from "./Components/Button"
import Modal from "./Components/Modal"
import Card from "./Components/CardData"

function App() {

  const [isLoaded, setIsloaded] = useState(false); 
  const [modal, setModal] = useState(false); 
  const [dataForm, setDataForm] = useState({program: "", reportType: "", format: "", path: "", file:null}) ; 
  console.log(dataForm)
  function handleClick() {
    setModal(!modal)
     setTimeout(handleSubmit, 5000  )
    }
  function handleClear()
  {
    setModal(false)
    setIsloaded(false)

  }
  function handleSubmit()
  {
    setIsloaded(true)
  }
  
  return (
    <div className="App">
      <div className = 'header' >
        SCORE REPORT INPUT FILE GENERATION
      </div> 
      <div style = {{display: 'flex', height: '100%'}}>  
      <Card onChange = {(e) => { setDataForm({...dataForm, [e.target.name]: e.target.value})}} 
       onFileUpload = { (e) => { setDataForm({...dataForm, [e.target.name]: e.target.files[0] })} } 
       onSubmit = {handleClick} /> 
       <Modal modal = {modal} isLoaded = {isLoaded} clear = {handleClear}/>
      </div> 
    </div>
  );
}

export default App;
