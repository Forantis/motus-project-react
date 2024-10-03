export default function RestartButton({setWord, setRowDone, setCounter, setResponse}) {
    const allPossibleWords = 
    [
        "bonjour", "amour", "chance", "soleil", "fleurs", "rêver", "éclair", 
        "pluie", "neige", "mer", "montre", "livres", "musique", "danser", 
        "rire", "joie", "calme", "douce", "heure", "lumière", "parler", 
        "écouter", "voyage", "famille", "amis", "nature", "espoir", 
        "bonheur", "sourire", "étoile"
    ]

    function handleRestartClick(){
        const wordIndex = Math.floor(Math.random() * allPossibleWords.length)
        setWord(allPossibleWords[wordIndex]);
        setRowDone(0);
        setCounter(1);
        setResponse([]);
    }

    return <button onClick={handleRestartClick}>Nouveau mot</button>
}