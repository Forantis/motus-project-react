import "./Grid.css"

export default function Grid({ searchedWord }: { searchedWord: string[] }) {
    return (
        <table id = "gameGrid">
            <tbody>
                {Array.from({ length: 6 }, (_, i) => (
                    <tr key={i}>
                        {searchedWord.map((letter, j) => (
                            <td key={j}></td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}