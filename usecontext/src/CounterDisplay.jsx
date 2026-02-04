import { useContext } from "react";
import { CounterContext } from "./CounterContext";

const CounterDisplay = () => {
  const { count } = useContext(CounterContext);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Global Count: {count}</h2>
    </div>
  );
};

export default CounterDisplay;
