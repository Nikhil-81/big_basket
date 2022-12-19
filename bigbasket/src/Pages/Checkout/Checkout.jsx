import { Center, Wrap, WrapItem } from '@chakra-ui/react'
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdd } from '../../Redux/Checkout/action'
import AddressForm from '../../Components/CheckoutComps/AddressForm'
import "./Checkout.css"
import AddressCard from '../../Components/CheckoutComps/AddressCard'
import Payment from '../../Components/CheckoutComps/Payment'
import OrderSummary from '../../Components/CheckoutComps/OrderSummary'
import logo from "../../assets/logo.jpeg"

const Checkout = () => {
    const dispatch = useDispatch()
    const AllAddress = useSelector((store) => store.checkout.AllAddress)
    const [style, setStyle] = useState("AddressBoxsmall");
    const [ns, setNs] = useState("")

    useEffect(() => {
        dispatch(getAdd)
        changeStyle()
    }, [])

    const changeStyle = () => {

        if(AllAddress.length>0){
            setStyle("AddressBoxbig");
        }
    };

    const cardclick = (id) => {
        setNs("AddressBoxsmall");
    }
    
    useEffect(() => {
        if (ns !== "") {
            setStyle()
        } else {
            setStyle("AddressBoxsmall")
        }
    }, [ns])

    return (
        <div>
            <div className='fake'>
            <div className='navdetail'>
                <img src={logo} alt="" />
                <h1>1860 123 1000</h1>
            </div>
            </div>
            <div className='Checkout'>
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
        </div>
    )
}

export default Checkout