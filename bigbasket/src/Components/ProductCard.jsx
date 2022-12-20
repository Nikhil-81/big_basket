import { Box,Heading, Text, Button, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeCart, updateCart } from "../Redux/cart/actions";
 
export function ProductCard({item}){


  

 
  const [addToBasket, setAddToBasket] = useState( true);
  const [addBtn,setAddBtn] = useState( false);
  

  

  // const [qty, setQty ] = useState(Number(1));

  let product = useSelector(store => store.cart)
  // console.log(product,"product in product cards")
  const dispatch = useDispatch();

  function handleAddToBasket(singleProduct){
    // console.log("clicked",singleProduct)
    
    if(addToBasket === true){
      // localStorage.setItem("addState",false)
      // localStorage.setItem("removeState",true)
      setAddToBasket(false)
      setAddBtn(true);
    }
    dispatch(addToCart(singleProduct))
  }

  // function handleAddItem(){
  //   let val = setQty(prev=>Number(prev)+1)
  //   dispatch(updateCart(val,item))
  // }

  function handleRemoveItem(item){
    
    dispatch(removeCart(item))
    if(addToBasket === false){
      // localStorage.setItem("addState",true)
      // localStorage.setItem("removeState",false)
      setAddToBasket(true)
      setAddBtn(false);
    }
  }

    return <Box display="flex" flexDirection="column" justifyContent="space-between" p="5px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={item.id}  h="auto" >
    <Link  to={`/product/single-product/${item.id}`}>
      
      <Box  h="auto" padding={5}>
      <Box ><Image src={item.image} h="fit-content" /></Box>
    
      <Text h="fit-content" noOfLines={2} >{item.name}</Text>

   
      <Text h="fit-content"  >Rs.{item.price}</Text>
      <Text h="fit-content"  >Rating: {item.rating}</Text>
      </Box>
    </Link>

      <Box  align="center"  h="50px" display="flex" justifyContent="center" > 
      { addToBasket && <Button  onClick={() => handleAddToBasket(item)} ml="5px" >ADD TO BASKET</Button> }
      { addBtn && <Button ml="5px" onClick={() => handleRemoveItem(item)} bg="red.400" >Remove</Button> }
     
      
     </Box>
     
    </Box>
}