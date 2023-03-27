import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {fetchUsers, loginUser} from './redux/actions/actionUser';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role,setRole] = useState("")
    const dispatch = useDispatch()

   useEffect(() => {
       dispatch(fetchUsers())
    }, [dispatch])
    
    const {isLoading, data, error} = useSelector((state) => {
        return state.users;
    })
    console.log(data)
    const handlerSubmitRegister = (e) => {
        e.preventDefault()
        const loginData = {
            email: email,
            password: password,
        }
    
        dispatch(loginUser({...loginData}))
    }
    
    return(
        <div>
          <center>
            <h1>Login</h1>
            <form onSubmit={handlerSubmitRegister}>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <label>Role</label>
                <button>Submit</button>
            </form>
          </center>
        </div>
    )
}

export default Login