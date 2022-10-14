import React, { useState, useEffect } from "react";
import { atom, useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import NonSSRWrapper from "../components/NonSSRWrapper";

export const countAtom = atom(0);

// localstorage atom with NextJS is not compilable at the moment because
// of NextJS SSR will find mismatch between local storage and client side initial value
// change the atom into normal atom and combine it with useEffect could avoid
// this issue.
// TBC working on atomWithStorage

// export const count2Atom = atomWithStorage("count", 0);
export const count2Atom = atom(0);

const isSSR = typeof window === "undefined";
export const localAtom = atomWithStorage("count3", 0);

const Counter = () => {
  const [count, setCount] = useAtom(countAtom);
  const [localCount, setLocalCount] = useAtom(count2Atom);
  const [count3, setCount3] = useAtom(localAtom);

  useEffect(() => {
    setLocalCount(parseInt(window.localStorage.getItem("count")));
  });

  // console.log(`local storage: ${localCount}`);

  return (
    <div className="flex">
      <div className="border-4 border-black grid place-items-center">
        <div>Counter</div>
        <div>Now the counter is: {count}</div>
        <div>
          <div className="flex ">
            <button
              className="btn  mx-4"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              add
            </button>
            <button
              className="btn "
              onClick={() => {
                setCount(count - 1);
              }}
            >
              minus
            </button>
          </div>
        </div>
      </div>

      {/* counter 2 */}
      <div className="border-4 border-yellow-400 grid place-items-center">
        <div>atom useState useEffect Counter2</div>
        <div>Now the counter is: {localCount}</div>
        <div className="flex ">
          <button
            className="btn  mx-4"
            onClick={() => {
              setLocalCount(localCount + 1);
              window.localStorage.setItem("count", localCount + 1);
            }}
          >
            add
          </button>
          <button
            className="btn "
            onClick={() => {
              setLocalCount(localCount - 1);
              window.localStorage.setItem("count", localCount - 1);
            }}
          >
            minus
          </button>
        </div>
      </div>

      {/* counter 3 */}
      <NonSSRWrapper>
        <div className="border-4 border-red-700 grid place-items-center">
          <div>atomWithStorage Counter3</div>
          <div>Now the counter is: {count3}</div>
          <div className="flex ">
            <button
              className="btn  mx-4"
              onClick={() => {
                setCount3(count3 + 1);
              }}
            >
              add
            </button>
            <button
              className="btn "
              onClick={() => {
                setCount3(count3 - 1);
              }}
            >
              minus
            </button>
          </div>
        </div>
      </NonSSRWrapper>
    </div>
  );
};

export default Counter;
