import "./Grid.css"

export default function Grid({ searchedWord, response, counter, rowDone }: { searchedWord: string[], response: string[], counter: number, rowDone: number }) {

    console.log("searchedWord", searchedWord);

    return (
        <table id = "gameGrid">
            <tbody>
                {Array.from({ length: 6 }, (_, i) => (
                    <tr key={i}>
                        {searchedWord.map((_, j) => (
                            <td key={j} className={
                                rowDone > i+1
                                    ? response[i*searchedWord.length+j] === searchedWord[j]
                                        ? "goodPosition"
                                        : searchedWord.includes(response[i*searchedWord.length+j])
                                            ? "badPosition"
                                            : "absentInTheWord"
                                    : ""
                            }>{response[i*searchedWord.length+j] ? response[i*searchedWord.length+j] : ""}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}