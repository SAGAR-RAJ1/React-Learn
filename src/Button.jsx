function PRint(object){
    //Every event has an object 
console.log("wow i am working")
console.log(object)
}

function Button(){
  return ( 
  <button onClick={PRint}>Click to Toggle Theme</button>
  
)
}
export default Button;