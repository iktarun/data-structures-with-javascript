import React, { useState, useEffect, useCallback } from "react";
import Child from "./Child";
import "./styles.css";

function useCustomCallback(fn, newDeps) {
  const ref = React.useRef({ callback: null, deps: [] });

  const arePropsEqual = (prevDeps, newDeps) =>
    prevDeps.length === newDeps.length &&
    prevDeps.every((deps, i) => deps === newDeps[i]);

  if (
    ref.current.callback === null ||
    !arePropsEqual(ref.current.deps, newDeps)
  ) {
    ref.current.callback = fn;
    ref.current.deps = newDeps;
  }
  // Reset memoized value on component unmount (optional but safe)
  useEffect(() => {
    return () => {
      ref.current = { callback: null, deps: [] }; // Cleanup
    };
  }, []);
  return ref.current.callback;
}

export default function App() {
  const [c, setC] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setC(c + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [c]);

  const handleClick = useCustomCallback(() => {
    document.body.style.background = "pink";
  }, []);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{c}</h2>
      <Child handleClick={handleClick} />
    </div>
  );
}
