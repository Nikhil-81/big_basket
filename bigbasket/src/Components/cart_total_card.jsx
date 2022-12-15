import { Button } from "@chakra-ui/react";

export default function CartTotalCard({cartCard_subtotal}){
    return (
        
        <div className="cart_card" >
            <div Style="display:grid;grid-row:1/7;grid-column:1/5" >
            <span className="cart_card_subtotal_Text" >Subtotal</span>
            <span className="cart_card_subtotal">Rs {cartCard_subtotal}</span>
        

            <span className="cart_card_DeliveryCost">Delivery Charges</span>
            <span className="cart_card_Delivery">...</span>

            <span className="cart_card_Total_text">TOTAL</span>
            <span className="cart_card_Total">Rs {cartCard_subtotal}</span>

            <span className="cart_card_copon_text">For this order: Accepted food coupon is Rs. 23.30</span>
            <span className="cart_card_CheckoutButton"><Button Style="background:green;color:white">CHECKOUT</Button></span>
            <p className="cart_card_TC">Actual delivery charges computed at checkout time</p>
        </div>
        </div>
    )
}