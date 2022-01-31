import React from "react";
import { useSelector,useDispatch } from "react-redux";

import {decrement, increment,incrementByAmount} from "../redux/counterSlice"

export default function Counter(){

    const counte = useSelector((state) => state.counter.counte)
    const dispatch = useDispatch()

    return (
        <div>
          <div>
            <button
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <span > the count is{counte}</span>
            <button
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>

            <button
              aria-label="incrementByAmount "
              onClick={() => dispatch(incrementByAmount(33))}
            >
              incrementByAmount
            </button>
          </div>
        </div>
      )

}