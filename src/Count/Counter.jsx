import { useContext } from "react";
import {
  decrementCounter,
  incrementCounter,
  resetCounter
} from "../redux/action";
import { AppContext } from "../redux/AppContextProvider";

const Counter = () => {
  const { dispatch } = useContext(AppContext)[1];
  const handleIncrement = () => {
    const action = incrementCounter(1);
    dispatch(action);
  };
  const handleDecrement = () => {
    const action = decrementCounter(1);
    dispatch(action);
  };
  const handleReset = () => {
    const action = resetCounter(1);
    dispatch(action);
  };
  return (
    <div>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
};

export default Counter;
