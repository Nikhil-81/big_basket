import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdd } from '../../Redux/Checkout/action'
import AddressForm from '../../Components/CheckoutComps/AddressForm'
import "./Checkout.css"
import AddressCard from '../../Components/CheckoutComps/AddressCard'
import Payment from '../../Components/CheckoutComps/Payment'
import OrderSummary from '../../Components/CheckoutComps/OrderSummary'

const Checkout = () => {
    const dispatch = useDispatch()
    const AllAddress = useSelector((store) => store.checkout.AllAddress)
    const [style, setStyle] = useState("AddressBoxsmall");
    const [ns, setNs] = useState("")

    console.log(AllAddress)
    useEffect(() => {
        dispatch(getAdd)
        changeStyle()
    }, [])

    const changeStyle = () => {

        if(AllAddress.length>0){
            setStyle("AddressBoxbig");
        }
    };
console.log(style)
    const cardclick = (id) => {
        setNs("AddressBoxsmall");
        console.log("hi")
    }
    
    useEffect(() => {
        if (ns !== "") {
            setStyle()
        } else {
            setStyle("AddressBoxsmall")
        }
    }, [ns])
    return (
        <div className='Checkout'>
            <div className='fake'>
            </div>
            <div className='Allbody'>
                <div className='leftside'>
                    <div className={style||ns} onClick={changeStyle}>
                        {/* <div className='addresscard'>
                            
                        </div> */}

                        <Wrap justify='space-between'>
                            {
                                style === "AddressBoxbig" &&
                                <WrapItem>
                                    <Center >
                                        {
                                            AllAddress.length>0 &&
                                            AllAddress.map((item) => {
                                                return (<AddressCard key={item.id} cardclick={cardclick} {...item} setStyle={setStyle} />)
                                            })
                                        }
                                    </Center>
                                </WrapItem>
                            }
                            <WrapItem justifyContent={'center'}>
                                <Center >
                                    <AddressForm />
                                </Center>
                            </WrapItem>

                        </Wrap>
                    </div>
                    
                    <div className="paymentbox" >
                        <Payment />
                    </div>
                </div>
                <div>
                    <OrderSummary />
                </div>
            </div>
        </div>
    )
}

export default Checkout