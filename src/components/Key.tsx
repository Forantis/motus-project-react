import "./Key.css"

export default function Key({ keyLetter, handleKeyClick }: { keyLetter: string, handleKeyClick: (keyLetter: string) => void }) {
  return <button className="key" onClick={() => handleKeyClick(keyLetter)}>{keyLetter}</button>;
}