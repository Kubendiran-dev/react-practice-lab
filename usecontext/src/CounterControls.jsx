import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterControls = () => {
  const { increment } = useContext(CounterContext);

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={increment}> Increment</button>
    </div>
  );
};

export default CounterControls;
