import {Box, Table, TableCell, TableRow, Typography, styled} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const date=new Date(new Date().getTime()+(5*24*60*60*1000));
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const Offer=styled(Box)`
&>p{
    font-size:14px;
    margin-top:10px;
    vertical-align:baseline;
}
`;
const Badge =styled(LocalOfferIcon)`
color:#00CC00;
margin-right:10px;
font-size:15px;
`;
const ProductDetail = ({product}) => {
  return (
    <>
        <Typography> {product.title.longTitle} </Typography>
            <Typography style={{marginTop:5,color:'#878787',fontSize:14}}> 
              8 Ratings & 1 Review 
              <Box component="span"> <img src={fassured} alt="fassured" style={{width:77,marginLeft:20}}/> </Box>
            </Typography>
            <Typography>
              <Box  component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
              <Box  component="span" style={{color:"#878787"}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
              <Box  component="span" style={{color:"#388E3C"}}>{product.price.discount}</Box>
        </Typography>
        <Typography>Available Offers</Typography>
        <Offer>
            <Typography><Badge/>Get Extra 10% off using SBI Credit Card</Typography>
            <Typography><Badge/>Get Extra 20% off using SBI Credit Card</Typography>
            <Typography><Badge/>Get Extra 90% off using SBI Credit Card</Typography>
            <Typography><Badge/>Get Extra 1% off using SBI Credit Card</Typography>
            <Typography><Badge/>Get Extra 10% off using SBI Credit Card</Typography>
            <Typography><Badge/>Get Extra 5% off using Axis Bank Credit Card</Typography>
        </Offer>
        <Table>
            <TableRow>
                <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                <TableCell style={{fontWeight:600}}>Delivered By {date.toDateString()} | ₹40</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color:"#878787"}}>Warranty</TableCell>
                <TableCell >No Warranty</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color:"#878787"}}>Delivery</TableCell>
                <TableCell >Delivered By {date.toDateString()} | ₹40</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{color:"#878787"}}>Seller</TableCell>
                <TableCell><Box component="span" style={{color:"#2874f0"}}>SuperComnet</Box>
                <Typography>Gst invoice available</Typography>
                <Typography>View More seller from ₹{product.price.cost}</Typography>
                </TableCell>
            </TableRow>
        </Table>
    </>
  )
}

export default ProductDetail