import React, { useEffect, useState } from "react";
import Counter from "../../src/components/Counter";
import Navbar from "../../src/components/Nav";

const Dog = (props) => {
  const [id, setId] = useState("temp");

  useEffect(() => {
    const asyncId = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos/2`);
      const data = await res.json();
      setId(data.title);
      return;
    };

    asyncId();
  }, [id]);

  return (
    <>
      <Navbar />
      <div>Dog</div>
      <Counter></Counter>
      <div>{props.title}</div>
      <wrong>what is this: {id}</wrong>
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
