import { Grid,Box, Typography, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import { useNavigate } from "react-router-dom";

const Container=styled(Grid)(({theme})=>({
padding:"30px 135px",
[theme.breakpoints.down('md')]:{
    padding:"15px 0"
}
}));
const Header=styled(Box)`
padding:15px 24px; 
`;

const Order=styled(Box)`
padding:16px 22px;
`;
const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`;
const LeftComponent=styled(Grid)(({theme})=>({
    [theme.breakpoints.down('sm')]:{
        marginBottom:15
    }
}))



const Cart = () => {
    const {cartItems}=useSelector(state=>state.cart);
    const navigate=useNavigate();
  return (
    <>
        {
            cartItems.length?
            <Container container>
                <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                    <Header>
                        <Typography>My Cart ({cartItems.length})</Typography>
                    </Header>
                    {
                        cartItems.map(item => (
                            <CartItem item={item}/>
                        ))
                    }
                    <Order>
                        <StyledButton onClick={()=>navigate('/payment')}>Place Order</StyledButton>
                    </Order>
                </LeftComponent>  
                <Grid item lg={3} md={3} sm={12} xs={12}>
                    <TotalView cartItems={cartItems}/>
                </Grid>
            </Container>
            :<>Cart is Empty</>
        }
    </>
  )
}

export default Cart