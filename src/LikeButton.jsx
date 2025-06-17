import { useState } from "react"


export default function LikeButton() {
  const [like, setlike] = useState(false)
    function click(){
        return(
           setlike(!like)
        )
    }
  return (
    //Boolean direct show  n hota toStrinf krna hoga
  <p onClick={click} style={{backgroundColor:"blue"}} >
    {like? <i  className="fa-regular fa-heart"></i>:<i class="fa-solid fa-heart"></i>
    }
  
    </p> 
    )
}
  