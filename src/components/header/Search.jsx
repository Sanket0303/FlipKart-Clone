import { InputBase,Box,styled, List, ListItem } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import { useState,useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const StyleSearch =styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`;
const StyleBox=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`;
const StyleList=styled(List)`
position:absolute;
background:white;
color:black;
margin-top:36px;
`;
const Search = () => {
  const [text,setText]=useState('');

  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const getText=(text)=>{
    setText(text);
  }
  return (
    <StyleBox>
        <StyleSearch placeholder="Search for products, brands and more"
        onChange={(e)=>getText(e.target.value)}
        value={text}
        />
        <SearchIcon style={{color:"Blue", padding:5}}/>
        {
          text&&
          <StyleList>
            {
              products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                <ListItem>
                  <Link to={`/product/${product.id}`} onClick={()=>setText('')}
                  style={{textDecoration:"none",color:"inherit"}}>
                  {product.title.longTitle}
                  </Link>
                </ListItem>
              ))
            }
          </StyleList>
        }
    </StyleBox>
    )
}
 
export default Search