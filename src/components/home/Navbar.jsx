import {Box,styled , Typography } from '@mui/material';
import {navData} from '../../Contains/Data'

const NavCss =styled(Box)(({theme})=>({
display:'flex',
margin:'55px 130px 0 130px',
justifyContent:'space-between',
overflow:'overlay',
[theme.breakpoints.down('lg')]:{
  margin:0
}
}));

const Wrap =styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Text =styled(Typography)`
 font-size:14px;
 font-weight:600;
 font-family:inherit;
`;
const Navbar = () => {
  return (
    <NavCss>
        {
            navData.map(data=>(
                <Wrap>
                    <img src={data.url} alt="NAV" style={{width:64}}/>
                    <Text>{data.text}</Text>
                </Wrap>
            ))
        }
    </NavCss>
  )
}

export default Navbar
