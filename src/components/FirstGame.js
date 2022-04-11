import React, { useState } from "react";
import Scissors from "../images/nozyczki.jpg";
import Rock from "../images/kamien.jpg";
import Paper from "../images/papier.jpg";
import "../css/FirstGame.css";
const FirstGame = () => {
  const [userHand, setUserHand] = useState("");
  const handleUserChoice = (choice) => {
    setUserHand(choice);
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
      <button>Gramy!</button>
      <div className="leftPanel">
        <p>
          Twój wybór: <span></span>
        </p>
        <p>
          Wybór komputera: <span></span>
        </p>
        <p>
          Zwycięzca: <span></span>
        </p>
      </div>
      <div className="rightPanel">
        <p>
          Ilość zwycięstw: <span></span>
        </p>
        <p>
          Ilość remisów: <span></span>
        </p>
        <p>
          Ilość przeganych: <span></span>
        </p>
      </div>
    </div>
  );
};

export default FirstGame;
