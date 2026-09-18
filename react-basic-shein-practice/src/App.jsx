import { useState, useEffect } from "react"; //Hooks
import "./App.css";

// props - properties
// One way data flow - Parent - to - Child

function App() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!name) {
      setError("Empty name is not allowed");
    }else if(name.trim() === ""){
      setError("Name cannot be just spaces");
    }
    else setError("");
  }, [name]);

  return (
    <>
      <form>
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && <p>{error}</p>}
      </form>
    </>
  );
}

export default App;
