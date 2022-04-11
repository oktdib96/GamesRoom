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
  const one = colors.map((item) => <Item content={item} />);
  return (
    <div className="game">
      <h1>Memory!</h1>
      <div className="table"> {one}</div>
    </div>
  );
};

export default Memory;
