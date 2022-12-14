import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Container,
    RadioGroup,
    Radio,
    Stack,
  } from '@chakra-ui/react'
  import React, { useState } from 'react'
  import { useDispatch } from 'react-redux'
  import { AddingAdd } from '../../Redux/Checkout/action'
  import "../../Pages/Checkout/Checkout.css"
  
  
  const AddressForm = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [data, setData] = useState({})
    const dispatch=useDispatch()
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value })
    }
    const handleadd = (e) => {
      e.preventDefault();
      // console.log(data)
      dispatch(AddingAdd(data))
    }
  
    return (
      <>
        <Button className='add' onClick={onOpen} variant={"unstyled"}>Add Address</Button>
        <Container>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            size="5xl"
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Delivery Address</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <h2>Personal Details</h2>
                <FormControl className='inpname'>
                  <div className='name'>
                    <FormLabel fontWeight={"normal"}>First Name</FormLabel>
                    <Input ref={initialRef} name="fname" onChange={handleChange} type="text" placeholder='First name' />
                  </div>
                  <div className='name'>
                    <FormLabel fontWeight={"normal"}>Last Name</FormLabel>
                    <Input ref={initialRef} name="lname" onChange={handleChange} type="text" placeholder='Last name' />
                  </div>
                  <div>
                    <FormLabel fontWeight={"normal"}>Phone Number</FormLabel>
                    <Input ref={initialRef} name="phone" onChange={handleChange} type="number" placeholder='Phone Number' />
                  </div>
                </FormControl>
                <br />
                <h2>Address Details</h2>
                <FormControl className='inpname' mt={4}>
                  <div className='name'>
                    <FormLabel fontWeight={"normal"}>House No.</FormLabel>
                    <Input name="house" onChange={handleChange} type="number" placeholder='House Number' />
                  </div>
                  <div className='address'>
                    <FormLabel fontWeight={"normal"}>Address </FormLabel>
                    <Input name='address' onChange={handleChange} type="text" placeholder='Address ' />
                  </div>
                </FormControl>
  
                <FormControl className='inpname' mt={4}>
                  <div className='name'>
                    <FormLabel fontWeight={"normal"}>City Name</FormLabel>
                    <Input name='city' onChange={handleChange} type="text" placeholder='City' />
                  </div>
                  <div >
                    <FormLabel fontWeight={"normal"}>Pin Code</FormLabel>
                    <Input name='pin' onChange={handleChange} type="number" placeholder='Pin' />
                  </div>
                </FormControl>
                <br />
                <label>Choose Nickname for this Address</label>
                <br />
  
                <RadioGroup name='location' onChange={handleChange} defaultValue="home" >
  
                  <Radio colorScheme='green' name='location' value='home'>
                    HOME
                  </Radio>
                  <Radio colorScheme='green' name='location' value='office'>
                    OFFICE
                  </Radio>
                  <Radio colorScheme='green' name='location' value='other'>
                    OTHER
                  </Radio>
  
                </RadioGroup>
              </ModalBody>
  
              <ModalFooter>
                <Button onClick={handleadd} colorScheme="green" mr={3}>
                  ADD ADDRESS
                </Button>
                <Button onClick={onClose}>CANCEL</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Container>
      </>
    )
  }
  
  export default AddressForm