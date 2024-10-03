import "./Grid.css"

export default function Grid({ searchedWord, response }: { searchedWord: string[], response: string[] }) {
    return (
        <table id = "gameGrid">
            <tbody>
                {Array.from({ length: 6 }, (_, i) => (
                    <tr key={i}>
                        {searchedWord.map((_, j) => (
                            <td key={j}>{response[i*searchedWord.length+j] ? response[i*searchedWord.length+j] : ""}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}