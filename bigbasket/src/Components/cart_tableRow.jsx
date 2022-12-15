import {
    Tr,Td, Button
  } from '@chakra-ui/react'
export default function Cart_row({cartItemName,cartItemPrice,cartItemQuantity,cartItemTotal,hendlecartUpdate,hendleCartClickRemove_itrm}){
    return (
        <>
              
        <Td>{cartItemName}</Td>
        <Td>Rs {cartItemPrice}</Td>
        <Td> <Button disabled={cartItemQuantity==1} onClick={()=>hendlecartUpdate(-1)} >-</Button> {cartItemQuantity} <Button onClick={()=>hendlecartUpdate(1)} >+</Button> </Td>
        <Td>{cartItemTotal}</Td>
        <Td  Style='cursor:pointer' onClick={hendleCartClickRemove_itrm} ><b>x</b></Td>
      
        </>
    )
}