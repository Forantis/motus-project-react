export default function RestartButton({setWord}){
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
    }

    return <button onClick={handleRestartClick}>Nouveau mot</button>
}