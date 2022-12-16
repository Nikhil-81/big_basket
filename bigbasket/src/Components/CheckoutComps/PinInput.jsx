import React,{ forwardRef } from "react"



const PinInput=forwardRef(({onchangehandle,backspacehandle},ref)=>{

    const handlekeyup=(e)=>{
        // to check keycode of backspace
        // console.log(e)
        if(e.keyCode===8){
            backspacehandle(e)
        }else{
            onchangehandle(e)
        }
    }
    return(
        <input style={{textAlign:"center",fontSize:"20px",color:"green",border:"1px solid grey",borderRadius:"7px",width:"35px"}} ref={ref} 
        maxLength={1}  
        onKeyUp={handlekeyup}
        />
    )
})
export default PinInput