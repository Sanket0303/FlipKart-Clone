import { Badge, Box, Button, Typography,styled } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LoginBox from "../login/LoginBox"
import { useState ,useContext} from "react";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container =styled(Box)(({theme})=>({
    display:"flex",
    margin: "0 3% 0 auto",
    '&>*':{
        marginRight:'40px !important',
        fontSize:16,
        alignItems:"center",
    },
    [theme.breakpoints.down('md')]:{
        display:"block"
    }
}));

const SubContainer =styled(Box)`
display:flex;
`
const LoginButton =styled(Button)`
background:#fff;
color:#2874f0;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`
const CustomButtons = () => {
    const [open,setOpen] =useState(false);
    const {account,setAccount} = useContext(DataContext);
    const {cartItems} =useSelector(state=>state.cart);
    const navigate=useNavigate();
  return (
    <Container>
        {account?<Profile account={account} setAccount={setAccount}/>:
            <LoginButton variant="contained" onClick={() => setOpen(true)}>
                Login
            </LoginButton>
        }
        
        <Typography style={{width:135,marginTop:3}}>
            Become a Seller
        </Typography>
        <Typography style={{marginTop:3}}>
            More
        </Typography>
        <SubContainer>
            <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCartIcon/>
            </Badge>
            <Typography style={{marginLeft:10, cursor:"pointer"}} onClick={()=>navigate('/cart')}>
                Cart
            </Typography>
        </SubContainer>
        <LoginBox open={open} setOpen={setOpen}/>
    </Container>
  )
}

export default CustomButtons
