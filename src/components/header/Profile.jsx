import { Menu, MenuItem, styled, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


const MenuStyled=styled(Menu)`
margin-top:5px;
`;

const Logout=styled(Typography)`
margin-left:20px;
font-size:14px;
`;
const Profile = ({account,setAccount}) => {
    const [open, setOpen] = useState(false)
    const handleClose=()=>{
        setOpen(false);
    }
    const logout=()=>{
        setAccount('');
    }
  return (
    <>
    <Box onClick={(event)=>setOpen(event.currentTarget)}>
        <Typography style={{marginTop:2, cursor:"pointer"}}>
            {account}
        </Typography>
    </Box>
    <MenuStyled
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>{handleClose();logout();}}> <ExitToAppIcon color="primary" fontSize="small"/>
        <Logout>Logout</Logout>
        </MenuItem>
      </MenuStyled>
    </>
  )
}

export default Profile