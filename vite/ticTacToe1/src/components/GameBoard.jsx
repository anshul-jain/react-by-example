import { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];
// OR Array(3).fill(Array(3).fill(null)); // This will create a 2D array with 3 rows and 3 columns, each cell initialized to null.
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
    const [gameboard, setGameboard] = useState(initialBoard);

    function handleSquareSelect(rowIndex, colIndex) {
        console.log('handleSquareSelect', rowIndex, colIndex);
        setGameboard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log('handleSquareSelect', updatedGameBoard);
            return updatedGameBoard;
        });
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSquareSelect(rowIndex, colIndex)}>{playerSymbol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
