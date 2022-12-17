import "./Cart.css";
import emptycart_iamge_one from "./image/empty-cart2.png"
import emptycart_iamge_two from "./image/empty-cart2.1.SVG"

import {useDispatch,useSelector} from "react-redux"
import { Box, Button, Heading, Hide, Image, Show, Text, Toast } from "@chakra-ui/react"
import ContinueShopping from "../../Components/Con_shop";
import {
    Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,
  } from '@chakra-ui/react'
import Cart_row from "../../Components/cart_tableRow";
import { clearCart, removeCart, updateCart } from "../../Redux/cart/actions";
import CartTotalCard from "../../Components/cart_total_card";
import Cart_item_Min from "../../Components/cart_comp/cart_item_min";
import { Link } from "react-router-dom";



function Cart() {
  const dispatch=useDispatch()
  const cart_store=useSelector((store)=>store.cart)
  console.log(cart_store)


  function hendlecartUpdate(val,item){
      dispatch(updateCart(val,item))
  }

function hendleClearCart(){
    console.log("Hell")
    dispatch(clearCart())
}
function hendleCartClickRemove_itrm(item){
    dispatch(removeCart(item))
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
         
            {/* <ContinueShopping cartbuttonname={"Continue Shopping"} Style={"display:block;margin:auto;"} /> */}
            <Button  Style={"display:block;margin:auto;"}>Continue Shopping</Button>
            
        </Hide>
        <Hide breakpoint='(min-width: 500px)'>
        <Text fontSize="2xl" >There are no items in your basket</Text>
            <hr/>
            <Box>
            <Image Style={"margin: auto;"} src={emptycart_iamge_two}  boxSize='200px' />
            {/* <ContinueShopping cartbuttonname={"Continue Shopping"} Style={"display:block;margin:auto;"} /> */}
            <Button  Style={"display:block;margin:auto;"}>Continue Shopping</Button>
            </Box>
        </Hide>
        </>
    )
}


    return (
        <>
        
        
        <div className="cart_window" >
            <Hide breakpoint='(max-width: 1136px)' >
        <TableContainer>
<Table  variant='unstyled' colorScheme='gray' >
<Thead>
  <Tr className="cart_table_header">
    <Th className="cartTableHeadings" >ITEM DESCRIPTION</Th>
    <Th className="cartTableHeadings" >UNIT PRICE</Th>
    <Th className="cartTableHeadings" >QUANTITY by</Th>
    <Th className="cartTableHeadings" >SUBTOTAL</Th>

  </Tr>
</Thead>
<Tbody>
    {cart_store.cartData.map(el=>(<Tr className="Cart_table_row" >
        <Cart_row cartItemName={el.title} hendlecartUpdate={(val)=>hendlecartUpdate(val,el)} cartItemPrice={el.price} cartItemQuantity={el.qty} cartItemTotal={el.qty*el.price} hendleCartClickRemove_itrm={()=>hendleCartClickRemove_itrm(el)} />
    </Tr>))}
</Tbody>
</Table>
</TableContainer>
<hr/>
<br/>
<br/>

<div className="cart_total_card" >

        <div className="cart_box1_button1"><span Style="display:flex;justify-content:start" ><ContinueShopping  cartbuttonname={"Cler Cart"} hendleCartbutton={hendleClearCart}/></span></div>
        
        <div  className="cart_box1_button2"><span Style="display:flex;justify-content:start" ><ContinueShopping  cartbuttonname={"Continue Shopping"} /></span> </div>
   

    <CartTotalCard cartCard_subtotal={(cart_store.subTotal).toFixed(2)} />
</div>
<br/>
<br/>

    </Hide>
    </div>
    <Show breakpoint='(max-width: 1136px)' >
        <div Style="background:red;height:80vh;">
            <div className="cart_min_box">
                {cart_store.cartData.map(el=>(<>
                <Cart_item_Min item_image={el.image} item_discription={el.title} item_price={el.price} Item_Quantity={el.qty} hendlecartUpdate={(val)=>hendlecartUpdate(val,el)} hendleCartClickRemove_itrm={()=>hendleCartClickRemove_itrm(el)} />
                </>))}
            </div>
            <div Style="background:#37474f;height:20%;display:flex;justify-content:space-around;align-items: center;">
                <div><Text ><b Style="color:white">Subtotal-</b><br/><b Style="color:white" >RS {(cart_store.subTotal).toFixed(2)}</b></Text></div>
                <div><Link to="/Checkout"><Button Style="background:#e95f62;color:white" >Checkout</Button></Link></div>
            </div>
            </div>
    </Show>
    </>

)

}

export default Cart;
