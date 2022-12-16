import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAddress, getAdd } from '../../Redux/Checkout/action'
import "../../Pages/Checkout/Styles/AddressCard.css"

const AddressCard = ({ id, fname, lname, address, pin, phone, city, house, setStyle,cardclick }) => {
  const dispatch=useDispatch()

  console.log(setStyle)
 

  const handledelete=(id)=>{
    dispatch(deleteAddress(id)).then(()=>{
      dispatch(getAdd)
    })
  }

  return (
    <div>
      <Card maxW='sm'>
        <CardBody>
          <Stack mt='6' spacing='3'>
            <Heading size='md'>Default Address : Home</Heading>
            <Text color='grey' >

              {fname} {lname},
              {house}, {address},
              {city}, {pin}
              Ph: {phone}

            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>

          <div style={{display:"block"}}>
          <Button variant='solid' width='100%' onClick={cardclick} backgroundColor='rgb(132, 194, 37)'>
            DELIVER NOW
          </Button>
          <Button variant='solid' width='100%' onClick={()=>handledelete(id)} backgroundColor='grey'>
            REMOVE ADDRESS
          </Button>
          </div>

        </CardFooter>
      </Card>

    </div>
  )
}

export default AddressCard