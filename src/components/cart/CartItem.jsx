import { Box, Button, Typography, styled } from "@mui/material";
import { addEllipsis } from "../../utlil/commonUtility";
import ButtonGroups from "./ButtonGroups";
import {removeFromCart} from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
const Component=styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
`;
const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;
const Seller=styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;
`;
const Remove=styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
fontWeight:600;
`;
const CartItem = ({item}) => {
    const dispatch=useDispatch();
  return (
    <Component>
        <LeftComponent>
            <img src={item.url} alt="product" style={{height:110}}/>
            <ButtonGroups/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <Seller>Seller: Sanket
                <Box component="span"><img src={fassured} alt="fassured" style={{width: 50,marginLeft:10}}/></Box>
            </Seller>
            <Typography style={{margin: '20px 0'}}>
              <Box  component="span" style={{fontWeight:600,fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box  component="span" style={{color:"#878787"}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box  component="span" style={{color:"#388E3C"}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>dispatch(removeFromCart(item.id))}>Remove</Remove>
        </Box>
    </Component>
  )
}

export default CartItem;