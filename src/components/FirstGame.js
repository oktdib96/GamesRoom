import Scissors from "../images/nozyczki.jpg";
import Rock from "../images/kamien.jpg";
import Paper from "../images/papier.jpg";
const FirstGame = () => {
  return (
    <div className="game">
      <img src={Scissors} alt="scissors" />
      <img src={Rock} alt="rock" />
      <img src={Paper} alt="paper" />
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
