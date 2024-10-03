import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Grid from './components/Grid'
import Keyboard from './components/Keyboard'
import RestartButton from './components/RestartButton'

function App() {

  const [word, setWord] = useState("salut")
  const searchedWord = word.split('');
  const [response, setResponse] = useState([])
  // counter to count how many letter has been submit by the user to act as a submit
  const [counter, setCounter] = useState(0)

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Backspace') {
      setResponse(prevResponse => prevResponse.slice(0, -1));
      setCounter(prevCounter => Math.max(prevCounter - 1, 0));
    }
  };

  // Add event listener for keydown
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <h1>Wordle From Wish</h1>
      <table>
        <Grid searchedWord={searchedWord} response={response} counter={counter}/>
      </table>
      <Keyboard response = {response} setResponse = {setResponse} counter={counter} setCounter={setCounter}/>
      <RestartButton setWord={setWord} />

    </>
  )
}

export default App
