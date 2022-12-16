import { Button, Image, Text } from "@chakra-ui/react";

export default function Cart_item_Min({item_image,item_discription,item_price,Item_Quantity,hendleCartClickRemove_itrm,hendlecartUpdate}){
    return(
        <div  Style={
            "display:grid;grid-template-columns:0.2fr 2fr 4fr 0.5fr;align-items:center;margin-top:1rem; box-shadow:  rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;"
        } >
            <div Style="grid-column:2/3;height:116px">
                 <Image Style={"height:100px;margin:auto"} src={item_image}/> 
                 <Button colorScheme='red' size='xs' onClick={hendleCartClickRemove_itrm} >Remove</Button>
                 </div>
            <div Style={"grid-column:3/4;"}>
            <div Style="margin-bottom:2rem" >{item_discription}</div>
            <div Style="display:flex;justify-content:space-between">
                <div>Rs:{item_price}</div>
                <div Style={"display:flex;justify-content:space-between;align-items:center;gap:0.5rem"}><Button disabled={Item_Quantity==1} onClick={()=>hendlecartUpdate(-1)} >-</Button>{Item_Quantity}<Button onClick={()=>hendlecartUpdate(1)} >+</Button></div>
                
                </div>
            </div>
        </div>
    )
}