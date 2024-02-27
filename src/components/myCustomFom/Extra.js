import { useState, useEffect, useRef } from "react";

// In React, variables declared inside a component body, such as count2 in your case, will be re-initialized on every render because the entire component function body is executed again on each render.

export default function Extra() {
  const [inputValue, setInputValue] = useState("");

  const str2 = useRef('');//Q:its generally not recommented to keep string valuue in useRef
  const count = useRef(0);
  const [count1, setCount] = useState(0);
  let count2 = 1;

  console.log(count);
  console.log(str2.current.value);

  
  // count.current = count.current + 1; This coauses double value to be printed so its better to use useEffect
  
  useEffect(() => {
    count.current = count.current + 1;
  });

  // useEffect(() => {

  // console.log('useeffect called');
  //    ++count2;
  //    console.log(count2);
  //   });

  return (
    <>
      <h3>Rendering component</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <h3>Non Rendering component</h3>
      <input
        type="text"
        // value={str2.current}
        ref={str2}
        // onChange={(e) => setInputValue(e.target.value)}
      />

      <button
        type="submit"
        onClick={() => {
          console.log(str2.current.value);
        }}
      >
        Click ME
      </button>

      <h1>Render Count: {count.current}</h1>
    
      <h2>To see upadatedValue in Non-Rendering <u>Open console</u>: {str2.current.value}</h2>  {/*Even  after i click button here value does not */}
      
    </>
  );
}
