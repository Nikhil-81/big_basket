import { useEffect, useRef, useState ,React} from 'react';
import { Box, Heading, Text, Input, Grid, Image, Button, useDisclosure } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { getProducts } from "../../Redux/products/actions";
import { addToCart } from '../../Redux/cart/actions';
import { ProductCard } from '../../Components/ProductCard';
import "./AllProduct.css"
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  Hide,
  Show,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
export function AllProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  // const products = new Array(20).fill('hello')
 
  // const [searchparams]=useSearchParams()
  let heading = useRef();
  const [searchParams, setSearchParams] = useSearchParams();

  const initRating = searchParams.getAll("rating");
  const initSort = searchParams.getAll("sort");
  const initOrder = searchParams.getAll("order");

  // console.log("initOrder",initOrder);
  // console.log("initSort",initSort)
  // console.log(initRating,"previous rating before refresh")

  // console.log("hello page load success")
  const currentUrl = useParams();
  // console.log(currentUrl,"hello")
  let products = useSelector(store => store.products.products);
  // console.log(products,"array");
  const dispatch = useDispatch();

  products = products.filter((item) => item.category === currentUrl.category)
  // console.log(products,"filtered array");
  // if(products.length === 0 ){
  //    heading.current.textContent = "no Product found for this rating" 
  // }else{
  //   heading.current.textContent = currentUrl.category;
  // }

  //--------------------------------------------------------------------------------

  const [rating, setRating] = useState(initRating || []);

  const handleFilterByRating = (e) => {

    const newRating = [...rating];
    if (newRating.includes(e.target.value)) {

      newRating.splice(newRating.indexOf(e.target.value), 1)
    } else {
      newRating.push(e.target.value)
    }
    setRating(newRating)

  }

  const location = useLocation();

  // console.log(rating,"rating")
  //----------------------------------------------------------------------------------------

  let lh = useRef();
  let hl = useRef();
  const [sort, setSort] = useState(initSort || []);
  const [order, setOrder] = useState(initOrder || [])
  function handleSortAsc(e) {
    // console.log("e.target",e.target)
    let targetSort = e.target.value.split(" ")[0];
    let targetOrder = e.target.value.split(" ")[1];
    const newSort = [...sort];
    const newOrder = [...order];
    
    if (newOrder.includes(targetOrder)) {
      newOrder.splice(newOrder.indexOf(targetOrder), 1)
    } else {
      newOrder.push(targetOrder)
    }

    if (newSort.includes(targetSort)) {
      newSort.splice(newSort.indexOf(targetSort), 1)
    } else {
      newSort.push(targetSort)
    }
    setSort(newSort);
    setOrder(newOrder);
    
    // console.log("hello")
  }

  function handleSortDsc(e){
    let targetSort = e.target.value.split(" ")[0];
    let targetOrder = e.target.value.split(" ")[1];
    const newSort = [...sort];
    const newOrder = [...order];
    
    if (newOrder.includes(targetOrder)) {
      newOrder.splice(newOrder.indexOf(targetOrder), 1)
    } else {
      newOrder.push(targetOrder)
    }
    
    if (newSort.includes(targetSort)) {
      newSort.splice(newSort.indexOf(targetSort), 1)
    } else {
      newSort.push(targetSort)
    }
    setSort(newSort);
    setOrder(newOrder);
    // lh.current.checked = false;
  
    // console.log("hello")
  }
  // console.log("sort", sort)
  //--------------------------------------------------------------------------  
  // const sortBy=searchparams.get("sort")
  // const getbookparams={
  //     params:{
  //         category:searchparams.getAll("category"),
  //         _sort:sortBy&&"release_year",
  //         _order:sortBy
  //     }
  // }

  useEffect(() => {
    if (location || products.length === 0) {
      // const sortBy= searchparams.get("sort")

      const productParams = {
        params: {
          // category: currentUrl.category,
          rating: searchParams.getAll("rating"),
          _sort: searchParams.get("sort"),
          _order: searchParams.get("order")
        }
      }
      // console.log(productParams,"product Params")
      dispatch(getProducts(productParams));
    }
  }, [products.length, dispatch, location.search])

  useEffect(() => {
    let params = {};
    params.rating = rating;
    params.sort = sort;
    params.order = order;
    setSearchParams(params)
    // console.log(searchParams,"search params")
  }, [order, sort, rating, setSearchParams])

  // useEffect(()=>{
  //   let params = {};
  //   params.sort = sort;
  //   setSearchParams(params);
  //   console.log(searchParams,"sort params")
  // },[sort])

  // console.log(products, 'arr')
  

  return (
    <Box mb="50px" >
      <Heading ref={heading} ml="170px" mb="-30px" mt="20px" >{currentUrl.category}</Heading>

      <Box
        className="MainBox"
        w="80%"
      
        mt="50px"
      >
<Hide breakpoint='(max-width: 660px)' >
<Box className="Filter" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" h="auto" p="10px" w="100%" >


<Text>Filter By Rating</Text>
<Box border="1px solid black" bg="black"></Box>
<Box
  className="brands"
  align="left"
  overflow="scroll"
  h="200px"
  mt="5px"
>

  <input type="checkbox" value="4.7" onChange={handleFilterByRating} checked={rating.includes("4.7")} />
  <label htmlFor="">4.7</label> <br />
  <input type="checkbox" value="4.6" onChange={handleFilterByRating} checked={rating.includes("4.6")} />
  <label htmlFor="">4.6</label> <br />
  <input type="checkbox" value="4.5" onChange={handleFilterByRating} checked={rating.includes("4.5")} />
  <label htmlFor="">4.5</label> <br />
  <input type="checkbox" value="4.4" onChange={handleFilterByRating} checked={rating.includes("4.4")} />
  <label htmlFor="">4.4</label> <br />
  <input type="checkbox" value="4.3" onChange={handleFilterByRating} checked={rating.includes("4.3")} />
  <label htmlFor="">4.3</label> <br />
  <input type="checkbox" value="4.2" onChange={handleFilterByRating} checked={rating.includes("4.2")} />
  <label htmlFor="">4.2</label> <br />
  <input type="checkbox" value="4.1" onChange={handleFilterByRating} checked={rating.includes("4.1")} />
  <label htmlFor="">4.1</label> <br />
  <input type="checkbox" value="3.9" onChange={handleFilterByRating} checked={rating.includes("3.9")} />
  <label htmlFor="">3.9</label> <br />
  <input type="checkbox" value="3.8" onChange={handleFilterByRating} checked={rating.includes("3.8")} />
  <label htmlFor="">3.8</label> <br />
  <input type="checkbox" value="3.7" onChange={handleFilterByRating} checked={rating.includes("3.7")} />
  <label htmlFor="">3.7</label> <br />
  <input type="checkbox" value="3.5" onChange={handleFilterByRating} checked={rating.includes("3.5")} />
  <label htmlFor="">3.5</label> <br />
</Box>

<br />
<Text>Sort Products</Text>
<Box border="1px solid black" bg="black"></Box>

<Box
  className="brands"
  align="left"
  overflow="scroll"
  h="200px"
  mt="5px"
>
  <input type="checkbox" value="price asc" onChange={handleSortAsc} checked={sort.includes("price") && order.includes("asc")} />
  <label htmlFor="">By Ascending Price</label> <br />
  <input type="checkbox" value="price desc" onChange={handleSortDsc} checked={sort.includes("price") && order.includes("desc")} />
  <label htmlFor="">By Descending Price</label> <br />
  <input type="checkbox" value="rating asc" onChange={handleSortAsc} checked={sort.includes("rating") && order.includes("asc")} />
  <label htmlFor="">By Ascending Rating</label> <br />
  <input type="checkbox" value="rating desc" onChange={handleSortDsc} checked={sort.includes("rating") && order.includes("desc")} />
  <label htmlFor="">By Descending Rating</label> <br />
 
</Box>

</Box>
</Hide>
    

<Show breakpoint='(max-width: 660px)' >
<>
      <HamburgerIcon ref={btnRef}  onClick={onOpen} className="hamburger_icon" w={10} h={10} color="red.500" />
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
        <Box className="Filter" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" h="auto" p="10px" w="100%" >


<Text>Filter By Rating</Text>
<Box border="1px solid black" bg="black"></Box>
<Box
  className="brands"
  align="left"
  overflow="scroll"
  h="200px"
  mt="5px"
>

  <input type="checkbox" value="4.7" onChange={handleFilterByRating} checked={rating.includes("4.7")} />
  <label htmlFor="">4.7</label> <br />
  <input type="checkbox" value="4.6" onChange={handleFilterByRating} checked={rating.includes("4.6")} />
  <label htmlFor="">4.6</label> <br />
  <input type="checkbox" value="4.5" onChange={handleFilterByRating} checked={rating.includes("4.5")} />
  <label htmlFor="">4.5</label> <br />
  <input type="checkbox" value="4.4" onChange={handleFilterByRating} checked={rating.includes("4.4")} />
  <label htmlFor="">4.4</label> <br />
  <input type="checkbox" value="4.3" onChange={handleFilterByRating} checked={rating.includes("4.3")} />
  <label htmlFor="">4.3</label> <br />
  <input type="checkbox" value="4.2" onChange={handleFilterByRating} checked={rating.includes("4.2")} />
  <label htmlFor="">4.2</label> <br />
  <input type="checkbox" value="4.1" onChange={handleFilterByRating} checked={rating.includes("4.1")} />
  <label htmlFor="">4.1</label> <br />
  <input type="checkbox" value="3.9" onChange={handleFilterByRating} checked={rating.includes("3.9")} />
  <label htmlFor="">3.9</label> <br />
  <input type="checkbox" value="3.8" onChange={handleFilterByRating} checked={rating.includes("3.8")} />
  <label htmlFor="">3.8</label> <br />
  <input type="checkbox" value="3.7" onChange={handleFilterByRating} checked={rating.includes("3.7")} />
  <label htmlFor="">3.7</label> <br />
  <input type="checkbox" value="3.5" onChange={handleFilterByRating} checked={rating.includes("3.5")} />
  <label htmlFor="">3.5</label> <br />
</Box>

<br />
<Text>Sort Products</Text>
<Box border="1px solid black" bg="black"></Box>

<Box
  className="brands"
  align="left"
  overflow="scroll"
  h="200px"
  mt="5px"
>
  <input type="checkbox" value="price asc" onChange={handleSortAsc} checked={sort.includes("price") && order.includes("asc")} />
  <label htmlFor="">By Ascending Price</label> <br />
  <input type="checkbox" value="price desc" onChange={handleSortDsc} checked={sort.includes("price") && order.includes("desc")} />
  <label htmlFor="">By Descending Price</label> <br />
  <input type="checkbox" value="rating asc" onChange={handleSortAsc} checked={sort.includes("rating") && order.includes("asc")} />
  <label htmlFor="">By Ascending Rating</label> <br />
  <input type="checkbox" value="rating desc" onChange={handleSortDsc} checked={sort.includes("rating") && order.includes("desc")} />
  <label htmlFor="">By Descending Rating</label> <br />
 
</Box>

</Box>
        </DrawerContent>
      </Drawer>
    </>
</Show>




        <Box w="90%" ml="20px">
          <Box

            className="Product-cards"

          >

            {products.length === 0 ? <Text w="350px" ml="400px" fontSize="lg" >No Product available with this rating...</Text> : products?.map((item) => {
              return (
                <ProductCard item={item} />
              )
            })}

          </Box>
        </Box>


      </Box>
    </Box>
  )
}
