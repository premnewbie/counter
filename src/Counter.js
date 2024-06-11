import { useState } from "react";

const Counter = () => {

    const [count,setCount] = useState(0);
    return ( <>
    <h1>Counter App</h1>
    <div>
        Count: {count}
    </div>
    <button onClick={()=>setCount(prev => prev+1)}>Increment</button>
    <button onClick={()=>setCount(prev => prev-1)}>Decrement</button>
    </> );
}
 
export default Counter;