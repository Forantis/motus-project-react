import Key from "./Key"
import "./Keyboard.css"

export default function Keyboard({response, setResponse}: {response: string[], setResponse: (response: string[]) => void}) {
    const keysLetters = ["A", "Z", "E", "R", "T", "Y", "U", "I", "O", "P", "Q", "S", "D", "F", "G", "H", "J", "K", "L", "M", "W", "X", "C", "V", "B", "N"];

    function handleKeyClick(keyLetter: string) {
        console.log(keyLetter);
        setResponse([...response, keyLetter]);
        console.log(response);
    }

    return (
        <div id="keyboard">
            {keysLetters.map((keyLetter, index) => (
                <Key keyLetter={keyLetter} handleKeyClick={handleKeyClick} key={index}/>
            ))}
        </div>
    );


}