import React from 'react'
import {AppBar,Toolbar,Box,styled, Typography, IconButton, Drawer, List, ListItem} from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const StyledHeader=styled(AppBar)`
background: #2874f0;
height:55px;
`;
const Component=styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`;
const Styledlogo=styled(Typography)`
font-size:10px;
font-style:italic;
`;
const CustomButtonsWrapper=styled(Box)(({theme})=>({
    margin:"0 5% 0",
    [theme.breakpoints.down('md')]:{
        display:"none"
    }

}));
const Menu=styled(MenuIcon)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:"block"
    }

}));
const Header = () => {
    const [open,setOpen]=useState(false);
    const logo="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    const list=()=>(
        <Box style={{width:200}} onClick={()=>{setOpen(false)}}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
  return (
    <StyledHeader>
        <Toolbar style={{minHeight:55}}>
            <IconButton style={{color:"inherit"}} onClick={()=>{setOpen(true)}}>
                <Menu/>
            </IconButton>
            <Drawer open={open} onClose={()=>{setOpen(false)}}>
                {list()}
            </Drawer>
            <Component to={`/`}>
                <img src= {logo} alt="Logo" style={{width:75}} />
                <Box>
                    <Styledlogo>
                        Explore&nbsp;
                        <Box component="span" style={{color:`#FFE500`}}>
                            Plus
                        </Box>
                        <img src={subURL} alt="sub" style={{width:10}} />
                    </Styledlogo>
                </Box>
            </Component>
            <Search/>
            <CustomButtonsWrapper>
                <CustomButtons/>
            </CustomButtonsWrapper>
        </Toolbar>
    </StyledHeader>
  )
}

export default Header