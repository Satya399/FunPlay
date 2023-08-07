
import "./App.css";
import Cards from "./components/cards";
import Board from "./TicTacToeGame/Board";

function App() {
  return (
    <>
    <div className="App" >
      <h1>Tic-Tac-Toe</h1>
      <Board />
    </div>
    <div className="pink">
    <h1>Memory Game</h1>
    <br/>
    <Cards/>
    </div>
    </>
  );
}

export default App;
