import { useReducer } from "react";

function setCountFunction(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}
function App() {
  const [count, setCount] = useReducer(setCountFunction, 0);
  return (
    <>
      <p>Count:{count}</p>
      <button onClick={() => setCount({ type: "increment" })}>+</button>
      <button onClick={() => setCount({ type: "decrement" })}>-</button>
    </>
  );
}
