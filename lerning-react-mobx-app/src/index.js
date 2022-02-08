import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configure } from "mobx";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import appState from "./store";
configure({ enforceActions: true });

const Counter = observer((props) => (
  <section>
    {props.appState.count}

    <div>
      <button onClick={props.appState.Increment}>Increment</button>
      <button onClick={props.appState.Decrement}>Decrement</button>
      <DevTools />
    </div>
  </section>
));
ReactDOM.render(
  <React.StrictMode>
    <Counter appState={appState} />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
