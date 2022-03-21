import React from "react";
import { useSelector, useDispatch, connect } from "react-redux";

import classes from "./Counter.module.css";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggle);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    // dispatch({
    //   type: "increment",
    // });
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    // dispatch({
    //   type: "decrement",
    // });
    dispatch(counterActions.decrement());
  };
  const increaseHandler = () => {
    // dispatch({
    //   type: "increase",
    //   val: 5,
    // });
    dispatch(counterActions.increase({ val: 5 }));
  };

  const toggleCounterHandler = () => {
    // dispatch({
    //   type: "toggle",
    // });
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class ClassCounter extends React.Component {
//   // constructor() {}
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {}
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);
export default Counter;
