
import axios from "axios";

export const registerService= async(user)=>{
    let res= await axios.post('http://localhost:3004/users/', user)
    console.log(res.data);
    return res.data;
}

export const loginService = async () => {
    let res = await axios.get('http://localhost:3004/users/');
    console.log(res.data);
    return res.data
}