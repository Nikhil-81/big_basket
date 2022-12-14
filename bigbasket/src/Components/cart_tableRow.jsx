import {
    Tr,Td, Button
  } from '@chakra-ui/react'
export default function Cart_row({cartItemName,cartItemPrice,cartItemQuantity,cartItemTotal,hendlecartUpdate}){
    return (
        <>
              
        <Td>{cartItemName}</Td>
        <Td>Rs {cartItemPrice}</Td>
        <Td> <Button onClick={()=>hendlecartUpdate(-1)} >-</Button> {cartItemQuantity} <Button onClick={()=>hendlecartUpdate(1)} >+</Button> </Td>
        <Td>{cartItemTotal}</Td>
      
        </>
    )
}