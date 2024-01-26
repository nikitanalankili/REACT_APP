import React, { useReducer } from "react";
import "../css/AllCss.css";
import "../css/Footer.css";

const initialState = { name: "KEC" };

function reducer(state, action) {
  switch (action.type) {
    case "pre":
      return { name: "KEC" };
    case "aft":
      return { name: "Kongu engineering College" };
    default:
      return state;
  }
}

const About = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>This is useReducer Example</h1>
      <h2>Welcome to {state.name}</h2>
      <button onClick={() => dispatch({ type: "pre" })}>Update previous name</button>
      <button onClick={() => dispatch({ type: "aft" })}>Update full name</button>
    </div>
  );
};

export default About;
