import { Box, Heading, Image, Text, Input, Button } from '@chakra-ui/react'
import { useRef } from 'react'

export function SingleProduct() {
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
      <Heading>Single Product Page</Heading>

      <Box className="container" w="80%" margin="auto" border="1px solid black" mt="50px" >
        <Box display="flex">
          {/* <Box className="filter sidebar"> */}
          <Box
            className="Filter"
            border="1px solid black"
            h="auto"
            p="10px"
            w="20%"
          >
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

          </Box>

          <Box className="singleProductBox" display="flex">
            <Box className="productImage">
              <Image
                src="https://www.bigbasket.com/media/uploads/p/l/40075537_5-fresho-onion.jpg"
                alt="onion-image"
                w="600px"
              />
            </Box>

            <Box className="productDetail" align="left" ml="20px" >
              <Text fontSize="xl">
                <u>Fresho</u>
              </Text>
              <Text>Fresh Onion, 2kg</Text>
              <Text>
                MRP. <strike>Rs. 74.13</strike>{' '}
              </Text>
              <Text>Price: Rs. 48(Rs.24/kg)</Text>
              <Text>You Save: 35%</Text>
              <Text>(Inclusive of All Taxes)</Text>

              <Box display="flex">
                <Input type="number" w="50px" outline="1px solid black" />
                <Button ml="5px">ADD TO BASKET</Button>
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

        <Box className='productDescription' >
            <Heading align="left" ml="20px" mt="50px" >Fresho Onion</Heading>
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
              
        </Box>
   

      </Box>
    </Box>
  )
}


