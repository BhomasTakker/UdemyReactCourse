import { useState } from "react";
import Output from "./Outputs";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello Worldie!!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <Output>It's still good to see you</Output>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
