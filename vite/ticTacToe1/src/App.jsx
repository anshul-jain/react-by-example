import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  

  return (
    <menu>
      <div id="game-container">
        Player
        <ol id="players">
         <Player initialName="Player 1" symbol="X" />
         <Player initialName="Player 2" symbol="O" />
        </ol>
        GAME BOARD
        <GameBoard />
      </div>
      LOG
    </menu>
  )
}

export default App
