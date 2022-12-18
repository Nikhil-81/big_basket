import { useEffect, useState } from 'react';
import { Box, Heading, Text, Input, Grid, Image, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import { getProducts } from "../../Redux/products/actions";
import { addToCart } from '../../Redux/cart/actions';
import { ProductCard } from '../../Components/ProductCard';

export function AllProduct() {
  // const products = new Array(20).fill('hello')
  

  // console.log("hello page load success")
  const currentUrl = useParams();
  // console.log(currentUrl,"hello")
  let products = useSelector(store => store.products.products);
  // console.log(products,"array");
  const dispatch = useDispatch();

  products = products.filter((item) =>  item.category === currentUrl.category)
  // console.log(products,"filtered array");

  


  useEffect(() => {
    if(products.length === 0){
       dispatch(getProducts());
    }
   },[products.length,dispatch])

  // console.log(products, 'arr')
  
  return (
    <Box>
      <Heading>{currentUrl.category}</Heading>

      <Box
        className="MainBox"
        w="80%"
        margin="auto"
        display="flex"
        justifyContent="center"
        mt="50px"
      >
        <Box className="Filter" border="1px solid black" h="auto" p="10px" w="20%">
          <Heading>Filtering Options</Heading>
          <hr />
          <br />

          <Text>Category</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />
          <Text>Brand</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Input
            type="text"
            placeholder="Search brands"
            w="100%"
            mt="10px"
            align="left"
          />
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />

          <Text>Seasonal</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />

          <Text>Country of Origin</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />

          <Text>Price</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />

          <Text>Discount</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>

          <br />

          <Text>Pack Size</Text>
          <Box border="1px solid black" bg="black"></Box>
          <Box
            className="brands"
            align="left"
            overflow="scroll"
            h="200px"
            mt="5px"
          >
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
            <input type="checkbox" />
            <label htmlFor="">xyz</label> <br />
          </Box>
        </Box>



        <Box w="90%">
        <Box
          
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          gap={2}
          className="Product-cards"
          
          height="auto"
          w="auto"
        >
          {products.map((item) =>  {
            return (
              <ProductCard item={item} />
            //  <Box display="flex" flexDirection="column" justifyContent="space-between" p="5px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={item.id}  h="auto" >
            //   <Link  to={`/product/single-product/${item.id}`}>
                
            //     <Box  h="auto" >
            //     <Box ><Image src={item.image} h="fit-content" /></Box>
             
            //     <Text h="fit-content"  >{item.name}</Text>

             
            //     <Text h="fit-content"  >Rs.{item.price}</Text>
            //     </Box>
            //   </Link>

            //     <Box  align="center"  h="50px" > 
            //     { addToBasket && <Button  onClick={() => handleAddToBasket(item)} ml="5px" >ADD TO BASKET</Button> }
            //     { addBtn && <Button ml="5px" onClick={handleReduceItem} >-</Button> }
            //     {/* { addbtn && <Text></Text> } */}
            //     { addBtn && <Button ml="5px" >+</Button> }
            //    </Box>
               
            //   </Box>
            
           )})}
        </Box>
        </Box>


      </Box>
    </Box>
  )
}
