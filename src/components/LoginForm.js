import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
const LoginForm=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [status,setStatus]=useState("")
    const [msg,setMsg]=useState("")
    const navigate=useNavigate()
    const handleChange=(e,key)=>{
        if(key==="email"){
            setEmail(e.target.value)
        }
        else if(key==="password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/signin",{
            email:email,
            password:password
        }).then((res)=>{
            setMsg(res.data.msg)
            setStatus(res.data.status)
            localStorage.setItem("UserToken",res.data.token)
        }).catch((err)=>console.log(err))
    }
    const handleNavigate=()=>{
        navigate("/dashboard")
    }
    return(
        <div>
        <form>
            <input type="text" placeholder="enter email" onChange={(e)=>handleChange(e,"email")}></input>
            <input type="text" placeholder="enter password" onChange={(e)=>handleChange(e,"password")}></input>
            <button onClick={(e)=>handleSubmit(e)}>login</button>
        </form>
        {
            status?handleNavigate():<h2>{msg}</h2>
        }
       
        </div>
    )
}
export default LoginForm