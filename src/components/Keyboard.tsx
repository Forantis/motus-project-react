import Key from "./Key"
import "./Keyboard.css"

export default function Keyboard({response, setResponse, counter, setCounter}: {response: string[], setResponse: (response: string[]) => void, counter: number, setCounter: (counter: number) => void}) {
    const keysLetters = ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "w", "x", "c", "v", "b", "n"];

    function handleKeyClick(keyLetter: string) {
        setResponse([...response, keyLetter]);
        setCounter(counter + 1);
    }

    return (
        <div id="keyboard">
            {keysLetters.map((keyLetter, index) => (
                <Key keyLetter={keyLetter} handleKeyClick={handleKeyClick} key={index}/>
            ))}
        </div>
    );


}