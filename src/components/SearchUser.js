import { useState } from "react"
import axios from "axios"
const SearchUser=()=>{
const [searchText,setSearchText]=useState("")
const [loading,setLoading]=useState(false)
const [err,setError]=useState("")
const [result,setResult]=useState([])
const handleChange=(e)=>{
    setSearchText(e.target.value)
}
const handleSubmit=(e)=>{
    e.preventDefault()
    const auth_header=localStorage.getItem("UserToken")
    console.log(auth_header)
    axios.get("http://localhost:3001/getbyarea?area="+searchText,{headers:{Authorization:"Bearer "+localStorage.getItem("UserToken")}}).then((res)=>setResult(res.data)).catch((err)=>console.log(err))
}
    return(
<div>
<form>
    <input type="text" placeholder="enter the area" onChange={handleChange}></input>
    <button onClick={(e)=>handleSubmit(e)}>search</button>
</form>
{
    loading?<h1>Loading...</h1>:result.map((item)=>(
        <div>
            <h1>{item.username}</h1>
            <h2>{item.email}</h2>
            <p>{item.country}</p>
        </div>
    ))
}

</div>
    )
}
export default SearchUser