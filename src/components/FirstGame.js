import React, { useState } from "react";
import Scissors from "../images/nozyczki.jpg";
import Rock from "../images/kamien.jpg";
import Paper from "../images/papier.jpg";
import "../css/FirstGame.css";
const FirstGame = () => {
  const [userHand, setUserHand] = useState("");
  const [aiHand, setAiHand] = useState("");
  const [result, setResult] = useState("");
  const handleUserChoice = (choice) => {
    setUserHand(choice);
    handleAiChoice();
  };
  const handleAiChoice = () => {
    const choices = ["scissors", "rock", "paper"];
    const choice = Math.floor(Math.random() * choices.length);
    setAiHand(choices[choice]);
  };
  const handleStartGame = () => {
    if (
      (userHand === "scissors" && aiHand === "paper") ||
      (userHand === "rock" && aiHand === "scissors") ||
      (userHand === "paper" && aiHand === "rock")
    ) {
      setResult("Wygrałeś!!!");
    } else if (
      (userHand === "scissors" && aiHand === "scissors") ||
      (userHand === "rock" && aiHand === "rock") ||
      (userHand === "paper" && aiHand === "paper")
    ) {
      setResult("Remis");
    } else if (
      (userHand === "scissors" && aiHand === "rock") ||
      (userHand === "rock" && aiHand === "paper") ||
      (userHand === "paper" && aiHand === "scissors")
    ) {
      setResult("Komputer był lepszy");
    }
    setUserHand("");
  };
  return (
    <div className="game">
      <h1>Papier, kamień, nożyce!</h1>
      <div className="images">
        <img
          className={userHand === "scissors" ? "active" : null}
          src={Scissors}
          alt="scissors"
          onClick={() => handleUserChoice("scissors")}
        />
        <img
          className={userHand === "rock" ? "active" : null}
          src={Rock}
          alt="rock"
          onClick={() => handleUserChoice("rock")}
        />
        <img
          className={userHand === "paper" ? "active" : null}
          src={Paper}
          alt="paper"
          onClick={() => handleUserChoice("paper")}
        />
      </div>
      <button onClick={handleStartGame}>Gramy!</button>
      <div className="result">
        <h2>
          Zwycięzca: <br />
          <span>{result}</span>
        </h2>
      </div>
    </div>
  );
};

export default FirstGame;
