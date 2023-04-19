const redux = require("redux");
const useReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increament") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === 'decreament'){
    return {
      counter: state.counter - 1,
    };
  }
  return {
    counter: state.counter,
  };
};
const store = redux.createStore(useReducer);
// console.log(store.getState());

const storeSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(storeSubscriber);
store.dispatch({ type: "increament" });
store.dispatch({ type: "decreament" });
