import './App.css'
import { useState } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import RestartButton from './components/RestartButton'

function App() {

  const [word, setWord] = useState("salut")
  const searchedWord = word.split('');
  const [response, setResponse] = useState([])
  // counter to count how many letter has been submit by the user to act as a submit
  const [counter, setCounter] = useState(0)

  return (
    <>
      <h1>Wordle From Wish</h1>
      <table>
        <Grid searchedWord={searchedWord} response={response}/>
      </table>
      <Keyboard response = {response} setResponse = {setResponse} counter={setCounter}/>
      <RestartButton setWord={setWord} />

    </>
  )
}

export default App
