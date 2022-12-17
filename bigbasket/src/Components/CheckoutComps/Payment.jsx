import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Flex, FormControl, FormLabel, Heading, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, TagLabel, useDisclosure } from '@chakra-ui/react';

import React, { useState } from 'react'
import "../../Pages/Checkout/Styles/payment.css"
import Pin from '../../Components/CheckoutComps/Pin'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [pininput, setPininput] = useState("")
  const [verify, setVerify] = useState(true)
  const [detail, setDetail] = useState(true)
  const [active, setActive] = useState(true)
  const [divchange, setDivchange] = useState("Nbank")
  const [success, setSuccess] = useState("")
  const [note, setNote] = useState("")
  const cartData=useSelector((store)=>store.cart.cartData)
  const navigate=useNavigate()
  // console.log(cartData)
  let totalmrp=0;
    let discount=0;
    let total=0
    for(let i=0;i<cartData.length;i++){
        totalmrp+=Number(Math.floor(cartData[i].price))
        discount+=Number(((Math.round(cartData[i].price))*.1))
    }
    total+=Number(totalmrp-Math.round(discount))

    const handlesuccess=()=>{
      navigate('/')
    }


  return (
    <div className='payment'>
      <div className='options'>
        <div onClick={() => { setActive(false); setDetail(false) }} style={{ backgroundColor: active ? "rgb(253, 247, 238)" : "white" }} className='offer'>
          <br />
          <h1>Payment options with offer</h1>
          <h3>Apply voucher code, if applicable, to avail the offer</h3>

        </div>
        <div onClick={() => { setActive(true); setDetail(true) }} style={{ backgroundColor: active ? "white" : "rgb(253, 247, 238)" }} className='other'>
          <br />
          <h1>Other Payment Options</h1>
          <h3>Credit/Debit,Netbanking,UPI and COD</h3>
        </div>
      </div>
      {
        detail &&
        <div className='detailsother'>
          <div className='detailsotherbox'>
            <div className='leftother'>
              <div className='leftothercomp' onClick={() => setDivchange("Nbank")}><h1>Net Banking</h1></div>
              <div className='leftothercomp' onClick={() => setDivchange("upi")}><h1>UPI</h1></div>
              <div className='leftothercomp' onClick={() => setDivchange("credit")}><h1>Credit Card/Debit Card</h1></div>
              <div className='leftothercomp' onClick={() => setDivchange("wallet")}><h1>Wallet</h1></div>
              <div className='leftothercomp' onClick={() => setDivchange("otp")}><h1>Cash On Delivery</h1></div>
            </div>
            <div className='rightother'>

              {
                divchange === "Nbank" &&
                <div>
                  <div className='netbank' >
                    <Accordion allowToggle >
                      <AccordionItem >
                        <h2 >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <Flex >
                                <img style={{ height: "30px" }} src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_607152.png" alt="" />
                                <Box marginLeft={'10px'}>
                                  <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif", marginTop: "5px" }}>HDFC Bank</h1>
                                </Box>
                              </Flex>
                            </Box>

                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <label style={{ color: "grey" }}>Enter Linked Mobile Number</label>
                          <Input variant='flushed' width='xs' isRequired/>
                          <br />
                          <h3 style={{ color: "rgb(75, 75, 75)", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                          <Button onClick={onOpen} variant='solid' marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                            Place Order & Pay</Button>
                          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />


                            <ModalContent>
                              <ModalHeader>Payment Process</ModalHeader>
                              <ModalCloseButton onClick={() => { setVerify(true); setSuccess(''); setNote('');setPininput(''); }} />
                              {verify &&
                                <ModalBody textAlign={'center'}>
                                  <h1 >Amount Payable : ₹ {total} </h1>
                                  <br />
                                  <Pin length={5} setPininput={setPininput} setNote={setNote} setVerify={setVerify} setSuccess={setSuccess} onclose={onClose} />

                                </ModalBody>
                              }
                              {
                                !verify&&pininput==="12345" &&
                                <ModalBody >
                                  <h1 style={{ margin: "auto" }}>{note}</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src={success} alt="" />
                                  {success==="https://i.pinimg.com/originals/6d/1d/a8/6d1da812e9c795eb5b2f4e8807d87014.gif"&&
                                  <button onClick={handlesuccess} style={{border:"1px solid grey",padding:"5px",borderRadius:"20px"}}>Continue Shopping !</button>}
                                  
                                </ModalBody>
                              }
                              {
                                !verify&&pininput!=="12345" &&
                                <ModalBody textAlign={'center'}>
                                  <h1 style={{ margin: "auto" }}>Wrong Credentials !</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src="https://i.pinimg.com/originals/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.png" alt="" />
                                </ModalBody>
                              }
                              <ModalFooter>
                                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                  Close
                                </Button> */}
                              </ModalFooter>
                            </ModalContent>



                          </Modal>





                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className='netbank'>
                    <Accordion allowToggle >
                      <AccordionItem >
                        <h2 >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <Flex >
                                <img style={{ height: "30px" }} src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_508534.png" alt="" />
                                <Box marginLeft={'10px'}>
                                  <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif", marginTop: "5px" }}>ICICI Netbanking</h1>
                                </Box>
                              </Flex>
                            </Box>

                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <label style={{ color: "grey" }}>Enter Linked Mobile Number</label>
                          <Input variant='flushed' width='xs' />
                          <br />
                          <h3 style={{ color: "rgb(75, 75, 75)", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                          <Button variant='solid' marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                            Place Order & Pay</Button>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                  <div className='netbank'>
                    <Accordion allowToggle >
                      <AccordionItem >
                        <h2 >
                          <AccordionButton >
                            <Box flex='1' textAlign='left'>
                              <Flex >
                                <img style={{ height: "30px" }} src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_bank_508548.png" alt="" />
                                <Box marginLeft={'10px'}>
                                  <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif", marginTop: "5px" }}>State Bank Of India</h1>
                                </Box>
                              </Flex>
                            </Box>

                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <label style={{ color: "grey" }}>Enter Linked Mobile Number</label>
                          <Input variant='flushed' width='xs' />
                          <br />
                          <h3 style={{ color: "rgb(75, 75, 75)", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                          <Button variant='solid' marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                            Place Order & Pay</Button>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              }
              {
                divchange === "upi" &&
                <div >
                  <Heading size={'md'} color={'rgb(50, 50, 50)'} marginTop={'10px'} marginLeft={"20px"} textAlign="start">Pay Using UPI</Heading>
                  <div className='upiother'>
                    <label style={{ fontWeight: "bold", color: "rgb(72, 72, 72)" }} >UPI id :</label>
                    <br />
                    <Input variant='flushed' width='auto' placeholder={'user@bankname'} />
                    <br />
                    <h3 style={{ color: "rgb(75, 75, 75)", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                    <Button onClick={onOpen} variant='solid' width='auto' marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                      SEND OTP</Button>
                      
                          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />


                            <ModalContent>
                              <ModalHeader>Payment Process</ModalHeader>
                              <ModalCloseButton onClick={() => { setVerify(true); setSuccess(''); setNote('');setPininput(''); }} />
                              {verify &&
                                <ModalBody textAlign={'center'}>
                                  <h1 >Amount Payable : ₹ {total} </h1>
                                  <br />
                                  <Pin length={5} setPininput={setPininput} setNote={setNote} setVerify={setVerify} setSuccess={setSuccess} onclose={onClose} />

                                </ModalBody>
                              }
                              {
                                !verify&&pininput==="12345" &&
                                <ModalBody textAlign={'center'}>
                                  <h1 style={{ margin: "auto" }}>{note}</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src={success} alt="" />
                                  {success==="https://i.pinimg.com/originals/6d/1d/a8/6d1da812e9c795eb5b2f4e8807d87014.gif"&&
                                  <button onClick={handlesuccess} style={{border:"1px solid grey",padding:"5px",borderRadius:"20px"}}>Continue Shopping !</button>}
                                  
                                </ModalBody>
                              }
                              {
                                !verify&&pininput!=="12345" &&
                                <ModalBody textAlign={'center'}>
                                  <h1 style={{ margin: "auto" }}>Wrong Credentials !</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src="https://i.pinimg.com/originals/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.png" alt="" />
                                </ModalBody>
                              }
                              <ModalFooter>
                                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                  Close
                                </Button> */}
                              </ModalFooter>
                            </ModalContent>



                          </Modal>
                  </div>
                </div>
              }
              {
                divchange === "credit" &&
                <div >
                  <Heading size={'md'} marginTop='10px' color={'rgb(50, 50, 50)'} textAlign={'start'} marginLeft={'20px'}>Pay Using Credit/Debit Card</Heading>
                  <div className='rightotherbox'>
                    <FormControl isRequired>
                      <FormLabel>First name</FormLabel>
                      <Input size='sm' variant='flushed' placeholder='First name' />
                      <br />
                      <HStack spacing='24px'>

                        <Input size='sm' variant='flushed' placeholder='First name' />
                        <Input size='sm' variant='flushed' placeholder='First name' />
                      </HStack>
                      <br />
                      <Button>Make Payment</Button>
                    </FormControl>
                  </div>
                </div>
              }
              {
                divchange === "wallet" &&
                <div>wallet</div>
              }
              {
                divchange === "otp" &&
                <div>otp</div>
              }
            </div>
          </div>
        </div>
      }
      {!detail &&
        <div className='detailsoffer'>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://play-lh.googleusercontent.com/__dcaC1aUkZqsP7UW6vwZpQiayorQhdBzhXAatmzSVp7wtwfpdyswVHt2FpVsx51V1g=w240-h480-rw" alt="" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Tata Pay</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>The smart & secure way to pay using NeuCoins, saved cards & more</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'auto'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "auto", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button onClick={onOpen} variant='solid' width='auto' marginLeft={'auto'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>
                    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                            <ModalOverlay />


                            <ModalContent>
                              <ModalHeader>Payment Process</ModalHeader>
                              <ModalCloseButton onClick={() => { setVerify(true); setSuccess(''); setNote('');setPininput(''); }} />
                              {verify &&
                                <ModalBody textAlign={'center'}>
                                  <h1 >Amount Payable : ₹ {total} </h1>
                                  <br />
                                  <Pin length={5} setPininput={setPininput} setNote={setNote} setVerify={setVerify} setSuccess={setSuccess} onclose={onClose} />

                                </ModalBody>
                              }
                              {
                                !verify&&pininput==="12345" &&
                                <ModalBody textAlign={'center'}>
                                  <h1 style={{ margin: "auto" }}>{note}</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src={success} alt="" />
                                  {success==="https://i.pinimg.com/originals/6d/1d/a8/6d1da812e9c795eb5b2f4e8807d87014.gif"&&
                                  <button onClick={handlesuccess} style={{border:"1px solid grey",padding:"5px",borderRadius:"20px"}}>Continue Shopping !</button>}
                                </ModalBody>
                              }
                              {
                                !verify&&pininput!=="12345" &&
                                <ModalBody textAlign={'center'}>
                                  <h1 style={{ margin: "auto" }}>Wrong Credentials !</h1>
                                  <img style={{ margin: "auto",width:"200px" }} src="https://i.pinimg.com/originals/d0/17/47/d01747c4285afa4e7a6e8656c9cd60cb.png" alt="" />
                                </ModalBody>
                              }
                              <ModalFooter>
                                {/* <Button colorScheme='blue' mr={3} onClick={onClose}>
                                  Close
                                </Button> */}
                              </ModalFooter>
                            </ModalContent>



                          </Modal>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://assets.juspay.in/juspay/payments/in.hyper.pay.bb_staging/beta/WEB/1.0rc1/assets/ic_paytm.png" alt="paytm" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Paytm</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Rs.25 - 500 Cashback, minimum order Rs.1000 valid TWICE. Avail cashback through scratch card on Paytm App.  (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'-250px'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/freecharge.png" alt="freecharge" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>Freecharge</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Flat Rs.50 cashback on minimum order value of Rs.1500; Once per user. (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'-250px'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/payzapp.png" alt="payzapp" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>PayzApp</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Flat 30 Rs Cashback, minimum order Rs.1000. Use code GROCERY on Payzapp page (Save up to Rs.30) (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'-250px'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/mobikwik.png" alt="mobikwik" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>MobiKwik</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Up to 100 Rs cashback. Minimum order Rs.299. Valid Once per user. Assured Cashback Rs.10 (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'-250px'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className='payoffer'>
            <Accordion allowToggle>
              <AccordionItem>
                <h2 >
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      <Flex >
                        <img style={{ height: "40px" }} src="https://payments.juspay.in/web/images/theme_light/mobikwik.png" alt="mobikwik" />
                        <Box marginLeft={'10px'}>
                          <h1 style={{ color: "rgb(72, 72, 72)", fontFamily: "sans-serif" }}>MobiKwik</h1>
                          <h2 style={{ color: "green", fontFamily: "sans-serif" }}>Get Rs.25 - 500 Cashback, minimum Recharge Rs.1500 valid TWICE. Avail cashback through scratch card on Paytm App.  (1-31 DEC)</h2>
                        </Box>
                      </Flex>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input variant='flushed' width='xs' marginLeft={'-250px'} />
                  <br />
                  <h3 style={{ color: "rgb(75, 75, 75)", marginLeft: "-270px", fontSize: "12px" }}>One time password (OTP) will be sent to this number</h3>

                  <Button variant='solid' width='25%' marginLeft={'-370px'} marginTop="10px" borderRadius={'0px'} color={'white'} backgroundColor='rgb(132, 194, 37)'>
                    SEND OTP</Button>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      }

    </div>
  )
}

export default Payment