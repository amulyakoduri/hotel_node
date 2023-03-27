import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Register from "./components/Register";
import AdminRoute from "./components/AdminRoute";
import UserRoute from "./components/UserRoute";

import './App.css';
import BookList from "./components/BookList";
import UserList from './components/UserList';
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
    
    <BrowserRouter>
     <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <ProtectedRoute exact path='/admin' element={<AdminRoute/>}/>
        <ProtectedRoute exact path= '/admin/bookList' element={<BookList/>}/>
        <ProtectedRoute exact path='/admin/userList' element={<UserList/>}/>
        <ProtectedRoute exact path='/user' element={<UserRoute/>}/>
     </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;
