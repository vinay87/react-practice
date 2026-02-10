"use client";

import { useState } from "react";

export default function Home() {

  const [count, setCount] = useState(0);


  return (
    <>
      <h2>Vinay React Practice</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click to increment</button> &nbsp;
      <button onClick={() => setCount(count - 1)}> Click to decrement</button> &nbsp;
      <button onClick={() => setCount(0)}>Reset</button>

    </>


  );
}
