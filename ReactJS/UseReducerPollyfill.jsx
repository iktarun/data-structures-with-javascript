import React, { useReducer, useState, useRef } from "react";

function useCustomReducer(reducer, initialState, initializer) {
  const [state, setState] = useState(() =>
    initializer ? initializer(initialState) : initialState
  );

  const dispatch = useRef((action) => {
    setState((prevState) => reducer(prevState, action));
  }).current;

  return [state, dispatch];
}

const updateRecord = (state, action) => {
  switch (action.type) {
    case "update_age":
      return {
        ...state,
        age: action.data,
      };
    case "update_name":
      return {
        ...state,
        name: action.data,
      };
  }
};

const initialState = { name: "", age: undefined };

export default function UseReducerApp() {
  const [state, dispatch] = useCustomReducer(updateRecord, initialState);

  function handleInputChange(e, type) {
    dispatch({
      type,
      data: e.target.value,
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => handleInputChange(e, "update_name")}
      />
      <input
        type="number"
        placeholder="Enter age"
        onChange={(e) => handleInputChange(e, "update_age")}
      />

      <p>
        Name: {state?.name} Age: {state?.age}
      </p>
    </div>
  );
}
