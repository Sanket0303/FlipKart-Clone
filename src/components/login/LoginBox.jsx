import {Button, Dialog, DialogContent,TextField, Typography,styled} from '@mui/material'
import { Box } from '@mui/system'
import { useState,useContext } from 'react';
import { DataContext } from '../../context/DataProvider';
import { validSignup,validLogin } from '../../services/api';

const Wrap=styled(DialogContent)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`;
const Lwrap=styled(Box)`
display:flex;
flex-direction:column;
padding:15px 35px;
flex:1;
&>div,&>button,&>p{
    margin-top:20px;
}
`;
const Img=styled(Box)`
height:100%;
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
width:30%;
padding:45px 35px;

&>p,&>h5{
    color:#fff;
    font-weight:600;
}
`;
const LoginButton=styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48;
border-radius:2px;
`;
const RequestOtp=styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text=styled(Typography)`
font-size:12px;
color:#878787;
`;

const CreatAcc=styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;

const accountObj={
    login:{
        type:true,
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signup:{
        type:false,
        heading:"Looks like you're new here!",
        subHeading:'Sign Up to get started'
    }

}
const signupObj={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:''
}
const loginInitial={
    username:'',
    password:''
}
const LoginBox = ({open,setOpen}) => {
    const [loginObj, setlogin] = useState(accountObj.login);
    const [signUp, setSignup] = useState(signupObj);
    const [logIn, setlogIn] = useState(loginInitial);
    const OnInput=(e)=>{
        setSignup({...signUp,[e.target.name]:e.target.value});
    };
    const OnValue=(e)=>{
        setlogIn({...logIn,[e.target.name]:e.target.value});
    };
    const {setAccount} = useContext(DataContext);
    const signUpUser= async()=>{
        let res= await validSignup(signUp);
        if(!res) return;
        setOpen(false);
        setlogin(accountObj.login);
        setAccount(signUp.firstname);   
    };
    const loginUser=async()=>{
        let res= await validLogin(logIn);
        if(res.status===200){
            setOpen(false);
            setlogin(accountObj.login);
            setAccount(res.data.data.firstname);
        }
    }
  return (
    <Dialog open={open} onClose={()=>{setOpen(false); setlogin(accountObj.login)}} PaperProps={{sx:{maxWidth:'unset'}}}>
        <Wrap>
            <Box style={{display: 'flex', height: '100%'}}>
            <Img>
            <Typography variant='h5'>{loginObj.heading}</Typography>
            <Typography style={{marginTop:20}}>{loginObj.subHeading}</Typography>
            </Img>
            {
                loginObj.type?
                <Lwrap>
                    <TextField variant='standard' label="Enter Email/Mobile number" onChange={(e)=>OnValue(e)} name='username'> </TextField>
                    <TextField variant='standard' label="Enter Password" onChange={(e)=>OnValue(e)} name='password'> </TextField>
                    <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                    <Text style={{textAlign:"center"}}>OR</Text>
                    <RequestOtp>Request OTP</RequestOtp>
                    <CreatAcc onClick={()=>setlogin(accountObj.signup)}>New to Flipkart? Create an account</CreatAcc>
                </Lwrap>:
                <Lwrap>
                    <TextField variant='standard' label="Enter First Name" onChange={(e)=>OnInput(e)} name='firstname'> </TextField>
                    <TextField variant='standard' label="Enter Last Name" onChange={(e)=>OnInput(e)} name='lastname'> </TextField>
                    <TextField variant='standard' label="Enter User Name" onChange={(e)=>OnInput(e)} name='username'> </TextField>
                    <TextField variant='standard' label="Enter Email" onChange={(e)=>OnInput(e)} name='email'> </TextField>
                    <TextField variant='standard' label="Enter Password" onChange={(e)=>OnInput(e)} name='password'> </TextField>
                    <TextField variant='standard' label="Enter Mobile number" onChange={(e)=>OnInput(e)} name='phone'> </TextField>
                    <LoginButton onClick={()=>signUpUser()}>Continue</LoginButton>
                    <CreatAcc onClick={()=>setlogin(accountObj.login)}>Existing User? Log in</CreatAcc>
                </Lwrap>
            }
            </Box>
        </Wrap>
    </Dialog>
  )
}

export default LoginBox