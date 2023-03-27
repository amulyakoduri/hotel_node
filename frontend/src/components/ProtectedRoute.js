import  { Route } from 'react-router-dom';
import { useEffect } from 'react';
import {useDispatch ,useSelector } from 'react-redux';
import {fetchUsers} from './redux/actions/actionUser';

const ProtectedRoute = (props) => {
    
    useEffect(() => {
        dispatch(fetchUsers)
    },[dispatch])

    const {} = useSelector((state) => {

    })

    const token = localStorage.getItem("token", token)
    if(token){
        return <Route  {...props}/>
    }
    return <Route to="/login"/>
}

export default ProtectedRoute