import { useState } from 'react'

import './App.css'
import Person from './components/Person'
import Button from './components/Button'
import Header from './components/Header'
import List from './components/List'


function App() {

  const handleClick = () => {
    alert('Button clicked!');
  };

  const items = ["Apple", "Banana", "Orange", "Mango", "Chikoo"];
 

  return (
    <div>
      <Person name="Rhishi" age="22"/>
      <Button text="Click me" onClick={handleClick} />
      <Header title="Hello!"/>
      <List items={items} />

      
      
    </div>
  )
}

export default App
