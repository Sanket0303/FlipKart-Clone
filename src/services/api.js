import axios from 'axios';
const URL="http://localhost:8000";
export const validSignup= async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)
    }catch(e){
        console.log(`Invalid signup`,e.message);
    }
}

export const validLogin= async (data)=>{
    try{
        return await axios.post(`${URL}/login`,data)
    }catch(e){
        console.log(`Invalid signup`,e.message);
    }
}
