import { useEffect, useState } from "react";
import axios from 'axios';
export default function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    async function login(){
        const response = await axios.post('http://localhost:3000/user/login', {email, password});
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('userId', JSON.stringify(response.data.user._id));
        localStorage.setItem('userName', JSON.stringify(response.data.user.name));
        window.location.href = "/"
    }
    return(
        <div className="h-screen w-screen bg-body flex justify-center items-center">
            <div className="h-[30rem] w-[20rem] bg-nav rounded-3xl drop-shadow-[0_10px_25px_rgba(255,255,255,0.25)]  flex justify-center items-center flex-wrap">
                <div className="flex-wrap w-[20rem] h-[20rem] flex justify-center items-center">
                    <h1 className="text-white text-center text-3xl"><strong>Welcome Back</strong></h1>
                    <li className="flex-wrap w-[17rem] justify-center items-center list-none text-white">
                        <label htmlFor="email">Email</label>
                        <input type="text" placeholder="Input your Username" id="email" className="h-[35px] w-[17rem] bg-[#262f33] text-white rounded-xl" onChange={(e)=>{
                            setEmail(e.target.value);
                        }}/>
                   </li>
                    <li className="flex-wrap w-[17rem] justify-center items-center list-none text-white">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Input your Passsword" id="password" className="h-[35px] w-[17rem] bg-[#262f33] text-white rounded-xl" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                    </li>
                    <button className="h-[30px] w-[200px] bg-gradient-to-r from-[#9340FF] to-[#FF3C5F] rounded-lg" onClick={()=>login()}>LogIn</button>
                    <h1 className="text-white relative bottom-[10px] text-sm">Don't have account?<br /><a href="/register" className="relative left-[30px] text-[#08e6ff]"><strong>Click Here</strong></a></h1>
                </div>
            </div>
        </div>
    )
}