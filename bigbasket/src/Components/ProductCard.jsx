import { Box,Heading, Text, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, updateCart } from "../Redux/cart/actions";
 
export function ProductCard({item}){

    const [addToBasket, setAddToBasket] = useState(true);
  const [addBtn,setAddBtn] = useState(false);

  const [qty, setQty ] = useState(0);

  let product = useSelector(store => store.cart)
  console.log(product,"product in product cards")
  const dispatch = useDispatch();

  function handleAddToBasket(singleProduct){
    console.log("clicked",singleProduct)
    if(addToBasket === true){
      setAddToBasket(false)
      setAddBtn(true);
    }
    dispatch(addToCart(singleProduct))
  
  }

  function handleAddItem(){
    let val = setQty(prev=>prev+1)
    dispatch(updateCart(val,item))
  }

  function handleReduceItem(){
    if(qty === 1){
      setAddToBasket(true)
      setAddBtn(false);
    }else{
        setQty(prev=>prev-1)
    }
  }

    return <Box display="flex" flexDirection="column" justifyContent="space-between" p="5px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={item.id}  h="auto" >
    <Link  to={`/product/single-product/${item.id}`}>
      
      <Box  h="auto" >
      <Box ><Image src={item.image} h="fit-content" /></Box>
    
      <Text h="fit-content" noOfLines={2} >{item.name}</Text>

   
      <Text h="fit-content"  >Rs.{item.price}</Text>
      </Box>
    </Link>

      <Box  align="center"  h="50px" display="flex" justifyContent="center" > 
      { addToBasket && <Button  onClick={() => handleAddToBasket(item)} ml="5px" >ADD TO BASKET</Button> }
      { addBtn && <Button ml="5px" onClick={handleReduceItem} >-</Button> }
      { addBtn && <Text mt="7px" ml="3px" w="50px" > {qty} </Text> }
      { addBtn && <Button ml="5px" onClick={handleAddItem} >+</Button> }
     </Box>
     
    </Box>
}