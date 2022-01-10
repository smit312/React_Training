import React from 'react';
import "./App.css";
import { useSelector , useDispatch } from 'react-redux';
import {incNumber , decNumber} from "./actions/index"

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  console.log(myState);
 
  return (
    <div>
      <h1>Increment/Decrement counter</h1>
      <h4>using React and Redux</h4>
      <button className="btnplus" onClick={() =>dispatch(incNumber()) }>+</button>
      <input type="text" value={myState} />
      <button className="btnminus" onClick={() => dispatch(decNumber())}>-</button>
    </div>
  )
}

export default App;
