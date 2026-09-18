const Greeting = ({ name, age }) => {
  return (
    <>
      <h1>Hello, {name}</h1>
      {age && <p>Your age is {age}</p>}
      <p>This is testing</p>
    </>
  );
};

const color = "yellow";
const age = 10;

export { color, age };

export default Greeting;
