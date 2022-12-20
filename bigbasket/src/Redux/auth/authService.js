
import axios from "axios";

export const registerService= async(user)=>{
    let res= await axios.post('https://bigbasket-server.onrender.com/users/', user)
    console.log(res.data);
    return res.data;
}

export const loginService = async () => {
    let res = await axios.get('https://bigbasket-server.onrender.com/users/');
    console.log(res.data);
    return res.data
}