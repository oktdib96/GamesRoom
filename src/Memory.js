import "./css/Memory.css";
import Card from "./components/Card";
const colors = [
  "blue",
  "blue",
  "red",
  "red",
  "green",
  "green",
  "yellow",
  "yellow",
  "pink",
  "pink",
  "orange",
  "orange",
  "aqua",
  "aqua",
  "beige",
  "beige",
];
const Memory = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [array[i], array[index]] = [array[index], array[i]];
    }
  };
  shuffleArray(colors);
  const Cards = colors.map((item) => <Card content={item} />);
  return (
    <div className="game">
      <h1>Memory!</h1>
      <div className="table"> {Cards}</div>
    </div>
  );
};

export default Memory;
