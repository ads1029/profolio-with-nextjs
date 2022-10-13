import React, { useState } from "react";
import { atom, useAtom } from "jotai";
export const countAtom = atom(0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);

  // const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <div>Now the counter is: {count}</div>
      <div className="flex ">
        <button
          className="btn  mx-4"
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        >
          add
        </button>
        <btn
          className="btn "
          onClick={() => {
            setCount(count - 1);
          }}
        >
          minus
        </btn>
      </div>
    </>
  );
};

export default Counter;
