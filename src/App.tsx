// import { useState } from 'react'
import './App.css';
import Form from './components/form'
import List from './components/list'
import Tooltip from './components/Tooltip';

function App() {
  return (
    <>
      <h1>Lets Get Stuff Done Today!</h1>
      <Form />
      <List />
      <Tooltip />
    </>
  )
}

export default App
