import React, { useEffect, useState } from "react";
import Counter from "../../src/components/Counter";
import Navbar from "../../src/components/Nav";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);

  // 如果状态码不在 200-299 的范围内，
  // 我们仍然尝试解析并抛出它。
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // 将额外的信息附加到错误对象上。
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

const Dog = (props) => {
  const [randomInt, setRandomInt] = useState(3);

  const { data, error } = useSWR(
    randomInt === 2
      ? `https://jsonplaceholder.typicode.com/tod/${randomInt}`
      : `https://jsonplaceholder.typicode.com/todos/${randomInt}`,
    fetcher
  );

  console.log(data, error);

  return (
    <>
      <Navbar />
      <div>Dog</div>
      <Counter></Counter>
      <p>SSR render title: {props.title}</p>
      <button
        className="btn btn-accent"
        onClick={() => {
          setRandomInt(Math.round(Math.random() * 10));
        }}
      >
        click to get a random title (throw error when ran = 2)
      </button>
      {!data && !error && <p> SWR is fetching data...</p>}
      {error && <p> oops! We found error: {error.status} </p>}
      {data && <p> SWR gets you: {data.title} </p>}
    </>
  );
};

export default Dog;

export const getStaticProps = async (props) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
  const data = await res.json();
  return {
    props: data,
  };
};
