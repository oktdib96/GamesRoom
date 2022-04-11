import "../css/Memory.css";
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
const Item = (props) => {
  return <div className={`square ${props.content}`}></div>;
};
const Memory = () => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const index = Math.floor(Math.random() * (i + 1));
      [array[i], array[index]] = [array[index], array[i]];
    }
  };
  shuffleArray(colors);
  const Card = colors.map((item) => <Item content={item} />);
  return (
    <div className="game">
      <h1>Memory!</h1>
      <div className="table"> {Card}</div>
    </div>
  );
};

export default Memory;
