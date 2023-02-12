import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("i run all the time");
  useEffect(() => {
    console.log("Call the API...");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
