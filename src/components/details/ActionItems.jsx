import { useState } from "react";
import { Box, Button, styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {addToCart} from "../../redux/actions/cartActions"

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }
}))
const StyledButton=styled(Button)(({theme})=>({
  width:"48%",
  height:"50px",
  borderRadius:"2px",
  fontSize:14,
  [theme.breakpoints.down('lg')]:{
    width:'46%'
  },
  [theme.breakpoints.down('sm')]:{
    width:'48%'
  }
}));
const Img=styled('img')({
    padding:'15px 20px',
    border:'1px solid #f0f0f0',
    width:"95%"
});
const ActionItems = ({product}) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [quantity, setquantity] = useState(1);
  const {id}=product;
  const Added=()=>{
    dispatch(addToCart(id,quantity));
    navigate('/cart');
  }
  return (
    <LeftContainer>
        <Img src={product.detailUrl} alt="Product Img"/>
        <StyledButton variant="contained" onClick={()=>Added()}  style={{marginRight:10, background:'#ff9f00'}}><ShoppingCartIcon/>Add to Cart</StyledButton>
        <StyledButton variant="contained" style={{background:'#fb541b'}} onClick={()=>navigate('/payment')}><FlashOnIcon/>Buy Now</StyledButton>
    </LeftContainer>
  )
}

export default ActionItems