import { store } from "../Redux/store";
export const Counter = () => {
  console.log(store.getState());
  return (
    <>
      <h3>Counter : 0</h3>
      <button
        onClick={() => {
          store.dispatch({ type: "ADD_COUNT", payload: 1 });
        }}
      >
        ADD 1
      </button>
      <button onClick={() => {}}>SUB 1</button>
    </>
  );
};
