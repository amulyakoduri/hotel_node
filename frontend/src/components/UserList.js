import { useEffect,useState } from 'react';
import { fetchUsers,deleteUser,updateUser,addUser } from './redux/actions/actionUser';
import { useDispatch,useSelector } from 'react-redux';

const UserList = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [role,setRole] = useState("") 
    const [term, setTerm] = useState(false)
    const dispatch = useDispatch();

    const {isLoading, data, error} = useSelector((state) => {
        console.log(state.users)
        return state.users
    });
    
    useEffect(() => {
      dispatch(fetchUsers());
     }, [dispatch]);

     

     const handleUserDelete = (id) => {
        dispatch(deleteUser(id))
     }

     const handlerEdit = (e,id) => {
        e.preventDefault();
        const updateDate = data.map((user) => {
            return user.id === id
        })
        const data = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        dispatch(updateUser({...updateDate,...data}))
    }

    const handleAdd = (e) => {
        setTerm(true)
        e.preventDefault()
        const data = {
            name: name,
            email: email,
            password: password,
            role: role
        }
        dispatch(addUser({...data}))
    }
    
     return(
        <div>
          <form onSubmit={ term ? handlerEdit: handleAdd}>
                <input type="name" placeholder="name" onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
                <label>Role</label>
                <select id = "dropdown" onChange={(e) => setRole(e.target.value)}>
                   <option value="none">none</option>
                   <option value="admin">admin</option>
                   <option value="user">user</option>
                </select>
                <button>{term ? 'Edit': 'Add'}</button>
            </form>
          {data.map((user) => {
            return(
                <div key={user.id}>
                    <h1>{user.name}</h1>
                    <p>{user.email}</p>
                    <button onClick={() =>  handlerEdit(user.id)}>Edit</button>
                    <button onClick={() => handleUserDelete(user.id)}>Delete</button>
                </div>
               )
          })}
        </div>
    )
}
export default UserList;