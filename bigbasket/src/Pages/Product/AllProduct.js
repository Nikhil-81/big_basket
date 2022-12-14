import { Box, Heading, Text, Input, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

export function AllProduct() {
  const dummyArr = new Array(20).fill('hello')
  console.log(dummyArr, 'arr')
  return (
    <Box>
      <Heading>Product Page</Heading>

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

        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={6}
          className="Product-cards"
          border="1px solid black"
          w="80%"
        >
          {dummyArr.map((item) => {
            return (
              <Box border="1px solid black" w>
                <Link to="/products/:id"> Single Product Page </Link>
              </Box>
            )
          })}
        </Grid>
      </Box>
    </Box>
  )
}



