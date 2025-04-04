//import { useState } from "react";

// OR Array(3).fill(Array(3).fill(null)); // This will create a 2D array with 3 rows and 3 columns, each cell initialized to null.
export default function GameBoard({ onSelectSquare, board }) {
    /*const [gameboard, setGameboard] = useState(initialBoard);

    function handleSquareSelect(rowIndex, colIndex) {
        console.log('handleSquareSelect', rowIndex, colIndex);
        setGameboard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            console.log('handleSquareSelect', updatedGameBoard);
            return updatedGameBoard;
        });
        onSelectSquare();
    } */

    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol !== null}>
                                    {playerSymbol}
                                </button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
