import "./Cart.css";
import emptycart_iamge_one from "./image/empty-cart2.png"
import emptycart_iamge_two from "./image/empty-cart2.1.SVG"

import {useDispatch,useSelector} from "react-redux"
import { Box, Button, Heading, Hide, Image, Show, Text } from "@chakra-ui/react"
import ContinueShopping from "../../Components/Con_shop";
import {
    Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,
  } from '@chakra-ui/react'
import Cart_row from "../../Components/cart_tableRow";
import { updateCart } from "../../Redux/cart/actions";

function Cart() {
  const dispatch=useDispatch()
  const cart_store=useSelector((store)=>store.cart)
  // console.log(cart_store)


  function hendlecartUpdate(val,item){
      dispatch(updateCart(val,item))
  }

  if(cart_store.cartData[0]==undefined){
    return (
        <>
        <Hide  breakpoint='(max-width: 500px)'>
            <Text fontSize="3xl" >There are no items in your basket</Text>
            <hr/>
            <Box>
            <Image Style={"margin: auto;"} src={emptycart_iamge_one}  boxSize='200px' />
            </Box>
            <br/>
            <ContinueShopping/>
        </Hide>
        <Show breakpoint='(max-width: 500px)'>
        <Text fontSize="2xl" >There are no items in your basket</Text>
            <hr/>
            <Box>
            <Image Style={"margin: auto;"} src={emptycart_iamge_two}  boxSize='200px' />
            <ContinueShopping/>
            </Box>
        </Show>
        </>
    )
}

    return (
        <div >
        <TableContainer>
<Table  variant='unstyled' colorScheme='gray' className="cart_window" >
<Thead>
  <Tr className="cart_table_header">
    <Th>ITEM DESCRIPTION</Th>
    <Th>UNIT PRICE</Th>
    <Th>QUANTITY by</Th>
    <Th>SUBTOTAL</Th>

  </Tr>
</Thead>
<Tbody>
    {cart_store.cartData.map(el=>(<Tr className="Cart_table_row" >
        <Cart_row cartItemName={el.title} hendlecartUpdate={(val)=>hendlecartUpdate(val,el)} cartItemPrice={el.price} cartItemQuantity={el.qty} cartItemTotal={el.qty*el.price}/>
    </Tr>))}
</Tbody>
</Table>
</TableContainer>

    </div>
)
}

export default Cart;
