
import './App.css'
// import HY from "./Title" Method 2
import {HY} from "./Title"

function App() {
let options =["Sagar","Aditya","Ayush"];
let object={
  s:"Sagar",
  a:"Adi"
};
  return (
    <>
    <HY name="Saarya" names={options} object={object} />
  <h1 >HEllo</h1>
  // If you not pass the names react eill handle it but accessing object
  // like obj.a will hrow error
  <HY name="Indrajeet" object={object}></HY>

   
     
    </>
    
  )
}

export default App
