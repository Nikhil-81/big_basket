import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddressForm from '../Components/AddressForm'
import { getAdd } from '../Redux/action'
import "../Styles/Checkout.css"

const Checkout = () => {
    const dispatch = useDispatch()
    const AllAddress = useSelector((store) => store.AllAddress)
    const [style, setStyle] = useState("AddressBoxsmall");
    const [ns, setNs] = useState("")

    // console.log(AllAddress)

    useEffect(() => {
        dispatch(getAdd)
    }, [])

    const changeStyle = () => {

        setStyle("AddressBoxbig");
    };

    // const cardclick = (id) => {
    //     setStyle("AddressBoxsmall");
    //     console.log("hi")
    // }
    console.log(style)
    console.log(ns)
    // useEffect(() => {
    //     if (ns !== "") {
    //         setStyle()
    //     } else {
    //         setStyle("AddressBoxsmall")
    //     }
    // }, [ns])
    return (
        <div className='Checkout'>
            <div className='fake'>
            </div>
            <div className='Allbody'>
                <div className='leftside'>
                    <div className={style} onClick={changeStyle}>
                        {/* <div className='addresscard'>
                            
                        </div> */}

                        <Wrap justify='space-between'>
                            {/* {
                                style === "AddressBoxbig" &&
                                <WrapItem>
                                    <Center >
                                        {
                                            AllAddress &&
                                            AllAddress.map((item) => {
                                                return (<AddressCard key={item.id} {...item} setStyle={setStyle} />)
                                            })
                                        }
                                    </Center>
                                </WrapItem>
                            } */}
                            <WrapItem justifyContent={'center'}>
                                <Center >
                                    <AddressForm />
                                </Center>
                            </WrapItem>

                        </Wrap>
                    </div>
                    <div className="delivery" >
                        {/* <DeliveryOption /> */}
                    </div>
                    <div className="paymentbox" >
                        {/* <Payment /> */}
                    </div>
                </div>
                <div>
                    {/* <OrderSummary /> */}
                </div>
            </div>
        </div>
    )
}

export default Checkout