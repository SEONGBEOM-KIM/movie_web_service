import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter changes");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"Continue"} />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
