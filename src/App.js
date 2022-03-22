import SearchUser from "./components/SearchUser"
import LoginForm from "./components/LoginForm"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
const App=()=>{
  return(
//<SearchUser></SearchUser>
<Router>
  <h1>XYZ - Company</h1>
  <nav>
    <Link to="/">Login</Link>  
  </nav>
<Routes>
    <Route path="/" element={<LoginForm></LoginForm>}></Route>
    <Route path="/dashboard" element={<SearchUser></SearchUser>}></Route>
</Routes>
</Router>


  )
}
export default App