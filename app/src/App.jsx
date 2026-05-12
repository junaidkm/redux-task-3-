import React from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/counterSlice";

function App() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button
        onClick={() => dispatch(incrementByAmount(5))}
      >
        +5
      </button>
    </div>
  );
}

export default App;