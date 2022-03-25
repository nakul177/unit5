import {useDispatch , useSelector} from "react-redux"
import { addcount, subcount } from "../Redux/action";




export const Counter = () => {
const dispatch = useDispatch()
const count = useSelector((store) => store.count)
  return (
    <>
      <h3>Counter : {count}</h3>
      <button
        onClick={() => {
          dispatch(addcount(1))
        }}
      >
        ADD 1
      </button>
      <button onClick={() => {
         dispatch(subcount(1))
      }}>SUB 1</button>
    </>
  );
};
