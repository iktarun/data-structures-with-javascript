import React, { useState, useEffect, useRef } from "react";

function useCustomMemo(callback, deps) {
  let ref = useRef({ value: undefined, deps: [] });

  // Dependency comparison function
  const areDepsEqual = (prevDeps, newDeps) =>
    prevDeps.length === newDeps.length &&
    prevDeps.every((dep, i) => dep === newDeps[i]);

  // console.log("ref.current:", ref.current);
  if (areDepsEqual(ref.current.deps, deps)) {
    console.log("---Returned from cache");
  } else {
    console.log("Not Returned from cache");
    ref.current.value = callback();
    ref.current.deps = deps;
  }

  // Reset memoized value on component unmount (optional but safe)
  useEffect(() => {
    return () => {
      ref.current = { value: null, deps: [] }; // Cleanup
    };
  }, []);

  return ref.current.value;
}

function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
// Component using the custom memo hook
function ExpensiveComponent({ num }) {
  const memoizedFactorial = useCustomMemo(() => factorial(num), [num]);

  return (
    <p>
      Factorial of {num}: {memoizedFactorial}
    </p>
  );
}

export default function App() {
  const [count, setCount] = React.useState(5);
  const [text, setText] = React.useState("");

  return (
    <div>
      <h1>useMemo Polyfill Demo</h1>
      <ExpensiveComponent num={count} />
      <p>{text}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setCount(5)}>Reset Count to 5</button>
      <input type="text" onChange={(e) => setText(e.target.value)} />
    </div>
  );
}
