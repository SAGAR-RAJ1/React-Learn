
import './App.css'
<<<<<<< HEAD
import Button from './Button'
=======
// import HY from "./Title" Method 2
import {HY} from "./Title"
>>>>>>> 36cf387ad573fe3d651f1937cc05bf510978a1b9

function App() {
let options =["Sagar","Aditya","Ayush"];
let object={
  s:"Sagar",
  a:"Adi"
};
  return (
    <>
<<<<<<< HEAD
  
<div>
<h1>Button will be here</h1>
=======
    <HY name="Saarya" names={options} object={object} />
  <h1 >HEllo</h1>
  // If you not pass the names react eill handle it but accessing object
  // like obj.a will hrow error
  <HY name="Indrajeet" object={object}></HY>
>>>>>>> 36cf387ad573fe3d651f1937cc05bf510978a1b9

</div>
   <Button/>
     
    </>
    
  )
}

export default App
