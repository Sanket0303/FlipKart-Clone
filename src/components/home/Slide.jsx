import {Box, Button, Divider, Typography, styled } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import {Link} from 'react-router-dom'



// to link product details we need to wrap data using Link component
const Wrapper=styled(Box)`
margin-top:10px;
background:#FFFFFF;
`;

const Deal=styled(Box)`
display:flex;
padding: 15px 20px;

`;
const Timer=styled(Box)`
display:flex;
margin-left:20px; 
align-items:center;
color:#7f7f7f;
`;
const View=styled(Button)`
margin-left:auto;
backgound:#2847f0;
border-radius:2px;
font-size:13px;
font-weight:600;
`;
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;
`;
const Img=styled('img')({
    width:'auto',
    height:150

})
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    }
};
const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
const Slide = ({products,title,timer}) => {
    const renderer=({hours,minutes,seconds})=>{
        return <> {hours}: {minutes} : {seconds} Left</>;
    }
  return (
    <Wrapper>
        <Deal>
            <Typography style={{fontSize:"22px",fontWeight:"600"}}>{title}</Typography>
            {
                timer&&<Timer>
                    <img src={timerURL} alt="noimage" style={{width:"24px"}}/>
                    <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                </Timer>
            }
            
            <View variant="contained" color="primary">View All</View>
        </Deal>
        <Divider/>
        <Carousel
            swipeable={false}
            draggable={false}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            {
                products.map(product => (
                    <Link to={`product/${product.id}`} style={{textDecoration:'none'}}>
                    <Box textAlign="center" style={{padding:'25px 15px'}}>
                        <Img src={product.url} alt="product_img"/>
                        <Text style={{fontWeight:"600", color:"#212121"}}>{product.title.shortTitle}</Text>
                        <Text style={{color:"green"}}>{product.discount}</Text>
                        <Text style={{color:"#212121", opacity:".6"}}>{product.tagline}</Text>
                    </Box>
                    </Link>
                ))
            }
        </Carousel>
    </Wrapper>
  )
}

export default Slide
