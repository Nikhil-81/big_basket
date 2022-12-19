import { Box, Heading, Image, Text, Input, Button } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToCart, removeCart } from '../../Redux/cart/actions';
import { getProducts } from '../../Redux/products/actions';

export function SingleProduct() {
  
  const [addToBasket, setAddToBasket] = useState(true);
  const [addBtn,setAddBtn] = useState(false);
  // const id = useParams();


  // // console.log(id  )
  // let cart = useSelector(store => store.cart.cart)
  // let products = useSelector(store => store.products.products);

  // const dispatch = useDispatch();
  // // console.log(products[1].id,"array");
  
  // useEffect(()=>{
    
  //   dispatch(getProducts());
  // },[products])
  

  // products = products.filter(item => item.id === Number( id.id) );
  // products = {...products[0]}
  // console.log("products",products);

  const {id} = useParams();
  const products = useSelector((store) => store.products.products );
  const [currentProduct,setCurrentProduct] = useState({});
  const dispatch = useDispatch();

  useEffect(()=>{
    if(products.length === 0){
      dispatch(getProducts());
    }
  },[products.length,dispatch]);

  useEffect(()=> {
    if(id){
      const product = products.find((item) => item.id === Number(id) );
      console.log("product",product);
      product && setCurrentProduct(product);
    }
  },[id,products])

  

  function handleAddToBasket(){
    // console.log("clicked",singleP)
    if(addToBasket === true){
      setAddToBasket(false)
      setAddBtn(true);
    }
    dispatch(addToCart(currentProduct))
    // console.log(cart,"cart")
  }

  function handleRemoveItem(){
    dispatch(removeCart(currentProduct))
    if(addBtn === true){
      setAddToBasket(true)
      setAddBtn(false);
    }
  }

  const btnRef1 = useRef()
  const btnRef2 = useRef()
  const btnRef3 = useRef()

  function highlightBtn() {
    if (btnRef1.current.className) {
      btnRef1.current.style.border = '3px solid green'
      btnRef2.current.style.border = 'none'
      btnRef3.current.style.border = 'none'
      //    console.log(btnRef1.current.className, "btn1 classname")
    }
  }
  function highlightBtn2() {
    if (btnRef2.current.className) {
      btnRef2.current.style.border = '3px solid green'
      btnRef1.current.style.border = 'none'
      btnRef3.current.style.border = 'none'
      //    console.log(btnRef1.current.className, "btn1 classname")
    }
  }

  function highlightBtn3() {
    if (btnRef3.current.className) {
      btnRef3.current.style.border = '3px solid green'
      btnRef1.current.style.border = 'none'
      btnRef2.current.style.border = 'none'
      //    console.log(btnRef1.current.className, "btn1 classname")
    }
  }

  

  return (
    <Box>

      <Heading ml="170px" >{currentProduct.name}</Heading>
      <Box className="container" w="80%" margin="auto" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" mt="50px" mb="50px" >
        
          

          <Box className="singleProductBox" display="flex" justifyContent="space-around" p="20px"  >
            <Box className="productImage">
              <Image
                src={currentProduct.image}
                alt="image"
                w="700px"
              />
            </Box>

            <Box className="productDetail" align="left" ml="20px" >
              <Text fontSize="xl">
                <u>{currentProduct.name}</u>
              </Text>
              <Text>{currentProduct.name}</Text>
              <Text>
                MRP. <strike>Rs. 74.13</strike>{' '}
              </Text>
              <Text>Price: Rs.{currentProduct.price}</Text>
              <Text>You Save: 35%</Text>
              <Text>(Inclusive of All Taxes)</Text>

              <Box display="flex">
                <Input type="number" w="50px" outline="1px solid black" />
                { addToBasket && <Button onClick={handleAddToBasket} ml="5px" >ADD TO BASKET</Button> }
                { addBtn && <Button ml="5px" onClick={handleRemoveItem} bg="red.400" >Remove</Button> }
               
                <Button ml="5px">SAVE</Button>
              </Box>

              <Text>Standard: Tomorrow Evening</Text>

              <Text>Pack Sizes</Text>
              <Box display="flex" flexDirection="column">
                <Button className="one" onClick={highlightBtn} ref={btnRef1}>
                  2kg Rs.48 MRP: <strike>Rs.74.13</strike> <span>35% off</span>{' '}
                </Button>
                <Button className="two" onClick={highlightBtn2} ref={btnRef2}>
                  1kg Rs.24 MRP: <strike>Rs.36.13</strike> <span>34% off</span>{' '}
                </Button>
                <Button className="three" onClick={highlightBtn3} ref={btnRef3}>
                  5kg Rs.120 MRP: <strike>Rs.184.13</strike>{' '}
                  <span>35% off</span>{' '}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* <Box className='productDescription' >
            <Heading align="left" ml="20px" mt="50px" >{currentProduct.name}</Heading>
            <hr />

            <Heading align="left" ml="20px" mt="50px" >About the product</Heading>
            <Text align="left" ml="20px" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur facere perferendis 
                voluptatem iure in atque temporibus quae, dolor omnis eveniet cumque culpa ea nam, reiciendis neque fugiat quo error?</Text>
             
            <Heading align="left" ml="20px" mt="50px" >Benefits</Heading> 
            <Text align="left" ml="20px" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur facere perferendis 
                voluptatem iure in atque temporibus quae, dolor omnis eveniet cumque culpa ea nam, reiciendis neque fugiat quo error?</Text>

            <Heading align="left" ml="20px" mt="50px" >Storage and Use</Heading> 
            <Text align="left" ml="20px" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur facere perferendis 
                voluptatem iure in atque temporibus quae, dolor omnis eveniet cumque culpa ea nam, reiciendis neque fugiat quo error?</Text>

            <Heading align="left" ml="20px" mt="50px" >Other Product Info</Heading> 
            <Text align="left" ml="20px" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur facere perferendis 
                voluptatem iure in atque temporibus quae, dolor omnis eveniet cumque culpa ea nam, reiciendis neque fugiat quo error?</Text>
              
        </Box> */}
   

      </Box>
    
  )
}
