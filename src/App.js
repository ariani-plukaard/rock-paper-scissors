import React, { useState } from "react";
import './App.css';
import Score from './components/score.js'
import GameBoard from './components/gameBoard.js'
import Play from './components/play.js'
import Hand from './components/hand.js'
import GameOutcome from './components/gameOutcome.js'
import PlayAgain from './components/playAgain.js'

const handValues = ["scissors", "paper", "rock"];

const App = () => {
  let [play, setPlay] = useState({
    score: 0,
    displayGame: true,
    choice: "",
    house: "",
    winStatus: "",
  });

  const updateScore = (choice, house, score) => {
    if (choice === house) {
      return 1
    }
    else if ((choice === "paper" && house === "rock") || (choice === "scissors" && house === "paper") || (choice === "rock" && house === "scissors")) {
      return 2
    }
    else { return -1 }
  }

  const scissorsClickHandler = (event) => {
    event.preventDefault();
    const housePick = handValues[Math.floor(Math.random() * handValues.length)];
    const addToScore = updateScore("scissors", housePick);
    const newScore = play.score + addToScore;
    const winOrLose = addToScore === 1 ? "DRAW" : addToScore === 2 ? "WIN" :"LOSE";
    setPlay({
      ...play,
      displayGame: false,
      choice: "scissors",
      house: housePick,
      score: newScore,
      winStatus: winOrLose,
    });
  }

  const paperClickHandler = (event) => {
    event.preventDefault();
    const housePick = handValues[Math.floor(Math.random() * handValues.length)];
    const addToScore = updateScore("paper", housePick);
    const newScore = play.score + addToScore;
    const winOrLose = addToScore === 1 ? "DRAW" : addToScore === 2 ? "WIN" :"LOSE";
    setPlay({
      ...play,
      displayGame: false,
      choice: "paper",
      house: housePick,
      score: newScore,
      winStatus: winOrLose,
    });
  }

  const rockClickHandler = (event) => {
    event.preventDefault();
    const housePick = handValues[Math.floor(Math.random() * handValues.length)];
    const addToScore = updateScore("rock", housePick);
    const newScore = play.score + addToScore;
    const winOrLose = addToScore === 1 ? "DRAW" : addToScore === 2 ? "WIN" :"LOSE";
    setPlay({
      ...play,
      displayGame: false,
      choice: "rock",
      house: housePick,
      score: newScore,
      winStatus: winOrLose,
    });
  }

  const playAgainClickHandler = (event) => {
    event.preventDefault();

    setPlay({
      ...play,
      displayGame: true,
    });
  }

  const noClickHandler = (event) => {
    event.preventDefault();
    console.log("Click 'Play Again' to play again");
  }

  return (
    <div className="App">
      <Score value={play.score}/>
      <GameBoard>
        {play.displayGame ?
        <Play>
          {handValues.map((hand, index) => {
            return (
              <Hand
                key={index}
                className={hand}
                value={hand}
                onClick={
                hand === "scissors" ? scissorsClickHandler
                  : hand === "paper" ? paperClickHandler
                  :  rockClickHandler
              }
              />
            );
          })}
        </Play>
        :
        <GameOutcome>
          <div>
            <p>YOU PICKED</p>
            <Hand className={play.choice} value={play.choice} onClick={noClickHandler}/>
          </div>
          <div>
          <p className="message">YOU {play.winStatus}</p>
          <PlayAgain onClick={playAgainClickHandler}></PlayAgain>
          </div>
          <div>
            <p>THE HOUSE PICKED</p>
            <Hand className={play.house} value={play.house} onClick={noClickHandler}/>
          </div>
        </GameOutcome>
        }
      </GameBoard>
    </div>
  );
}

export default App;
