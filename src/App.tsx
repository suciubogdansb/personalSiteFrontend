import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useTokenStore} from "./Store/TokenStore";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import PrivateRoute from "./Components/PrivateRoute";
import LoginPage from "./Pages/LoginPage";
import HomePage from "./Pages/HomePage";
import UserPostsPage from "./Pages/UserPostsPage";
import LogoutPage from "./Pages/LogoutPage";
import AddPage from "./Pages/AddPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginPage/>}></Route>
                    <Route path="/register" element={<RegisterPage/>}></Route>
                    <Route path="/error" element={<div>ERROR</div>}></Route>
                    <Route path="/user" element={<UserPostsPage/>}/>
                    <Route path="/logout" element={<LogoutPage/>}/>
                    <Route path="/add" element={<AddPage/>}/>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default App;
