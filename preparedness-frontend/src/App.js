import React, { useState } from "react"
import { Button, Input, Label } from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"
import "./index.css"

const App = () => {
  const [name, setName] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleClickReset = () => {
    setName('')
  }
  return (
    <div className="entire-content">
      <h1 className="header">Preparedness Assessment</h1>
      <div className="form">
        <div className="input">
          <Label for="name">Enter your name</Label>
          <Input type="text" value={name} onChange={handleNameChange}/>
        </div>
        <div className="buttons">
          <ModalComponent id="click-me"header={`Hi, ${name}!`}/>
          <Button id="reset" onClick={handleClickReset}>Reset</Button>
        </div>
      </div>
    </div>
  )
}

export default App
