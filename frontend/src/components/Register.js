import { registerUser} from './redux/actions/actionUser';
import { useState } from "react";
import { useDispatch } from "react-redux";


const Register = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role,setRole] = useState("")
    const dispatch = useDispatch()
    
    const handlerSubmitRegister = (e) => {
        e.preventDefault()
        const registerData = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        dispatch(registerUser({...registerData}))
    }
    return(
        <center>
            <h1>Register</h1>
            <form onSubmit={handlerSubmitRegister}>
                <input type="name" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <label>Role</label>
                <select id = "dropdown" onChange={(e) => setRole(e.target.value)}>
                   <option value="none">none</option>
                   <option value="admin">admin</option>
                   <option value="user">user</option>
                </select>
                <button>Submit</button>
                <button to="/login">Login</button>
            </form>
        </center>
    )
}

export default Register;