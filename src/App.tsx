import './App.css'
import { useState } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import RestartButton from './components/RestartButton'

function App() {

  const [word, setWord] = useState("salut")
  const searchedWord = word.split('');
  const [response, setResponse] = useState([])

  return (
    <>
      <h1>Wordle From Wish</h1>
      <table>
        <Grid searchedWord={searchedWord} />
      </table>
      <Keyboard response = {response} setResponse = {setResponse}/>
      <RestartButton setWord={setWord} />

    </>
  )
}

export default App
