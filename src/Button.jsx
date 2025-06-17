import { useState } from "react";


function Button(){
    const [count, setcount] = useState(0);
function incCount() {
 setcount(count+1)
}
  return ( 
    <div>
   <button onClick={incCount}>Click to increase count</button>
       <h3>Count : {count}</h3>
    </div>
  
)
}
export default Button;