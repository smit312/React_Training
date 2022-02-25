import { observable, configure, action } from "mobx";
const appState = observable({
  count: 0,
  Increment: action(() => {
    appState.count += 1;
  }),
  Decrement: action(() => {
    appState.count -= 1;
  }),
});
export default appState;
