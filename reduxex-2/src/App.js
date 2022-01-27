import React from "react";
import { useSelector , useDispatch } from 'react-redux';
import { DipositMoney , withdrawMoney } from "./actions/index";


function App() {
  const myState = useSelector((state) => state.ChangeAccountBalance)
  const dispatch = useDispatch();
  // console.log(myState);
  return (
    <center>
      <h1> Your main balance is : {myState}</h1>
      <h1>Deposite/withdraw your money</h1>
      <h2>using react and redux</h2>
      <button onClick={() => dispatch(withdrawMoney())}>-</button>
      <input type="text" value="0" value={myState}/>
      <button onClick={() => dispatch(DipositMoney())}>+</button>
    </center>   
  );
}

export default App;
