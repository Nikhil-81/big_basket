import { useRef, useState } from "react"
import PropTypes from "prop-types"
import PinInput from "./PinInput"
import { Button } from "@chakra-ui/react"


const Pin=({length,setPininput,setNote,setVerify,setSuccess})=>{
    const[inputboxlength]=useState(new Array(length).fill(''))
    const[inputboxvalue]=useState(new Array(length).fill(''))
    
    const inputref=useRef([])
    const buttonref=useRef()

    const onchangehandle=(e,index)=>{
        inputboxvalue[index]=e.target.value
        if(e.target.value.length>0&&index<length-1){
            inputref.current[index+1].focus()
        }
        if(e.target.value.length>0&&index===length-1){
            buttonref.current.focus()
        }
        setPininput(inputboxvalue.join(""))
    }
    const backspacehandle=(e,index)=>{
        if(index>0){
            inputref.current[index-1].focus()
        }
        // if(buttonref.current.focus()){
        //     inputref.current[length-1].focus()
        // }
        inputboxvalue[index]=e.target.value;
        setPininput(inputboxvalue.join(""));
    }
    const handlepaste=(e)=>{
        e.preventDefault();
        const data=e.clipboardData.getData("number")
        .split("").filter((item,index)=>index<length);
        console.log(data)

        data.array.forEach((item,index) => {
            inputboxvalue[index].value=item;
            if(index<length-1){
                inputref.current[index+1].focus();
            }
        });
    }

    const handleend=()=>{
        const interval = setTimeout(() => {
            setNote("Please wait your transaction is processing...")
            setSuccess("https://course.quitwithnancy.com/wp-content/plugins/education/template/images/loader3.gif")
        }, 500);
        const interval2 = setTimeout(() => {
            setNote("Transaction Complete !")
            setSuccess("https://i.pinimg.com/originals/6d/1d/a8/6d1da812e9c795eb5b2f4e8807d87014.gif")
            
        }, 5500);
        
    }

    return(
        <div >
            <div style={{display:"flex", gap:"10px"}} onPaste={handlepaste}>
            {inputboxlength.map((e,index)=>{
                return(
                    <PinInput 
                     ref={(inputelement)=>{
                        inputref.current[index]=inputelement
                    }} 
                    key={index} 
                    onchangehandle={(e)=> onchangehandle(e,index)}
                    backspacehandle={(e)=>backspacehandle(e,index)}
                    />

                )
            })}  
        </div>
        <br />
        <Button marginLeft={'80px'} borderRadius={'none'}   backgroundColor={'rgb(132, 194, 37)'} margin={'auto'} ref={(buttonele)=>{
            buttonref.current=buttonele
        }} onClick={()=>{console.log("Verify OTP");setVerify(false);handleend();}}>Verify OTP</Button>
        </div>
    )
}
export default Pin

Pin.propTypes={
    length:PropTypes.number.isRequired
}