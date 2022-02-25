const redux = require("redux");

// CREATING A REDUCER FUNCTION
const counterReducer = (state = { counter: 0 }, action) => {
  // CHECKING THE ACTION TYPE AND DISPACTCHING THE ACTION ACCORDINGLY
  if (action.type === 'INCREMENT'){
      return {
          counter: state.counter + 1
      };
  };
  if (action.type === 'DECREMENT'){
      return {
          counter: state.counter - 1
      };
  }
  return state;
};

// CREATING A STORE TO HOLD THE REDUCER DETAILS
const store = redux.createStore(counterReducer);

// A COMPONENT THAT IS SUBSCRIBING TO THE STORE
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// SUBSCRIBES THE COMPONENT TO THE STORE
store.subscribe(counterSubscriber);

// DISPATCHING THE ACTION
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
