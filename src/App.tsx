import React, {useEffect} from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import UserPostsPage from "./Pages/UserPostsPage";
import LogoutPage from "./Pages/LogoutPage";
import {AdminRoutes, BackendRoutes, UserRoutes} from "./Services/RouteGuard";
import UserManagementPage from "./Pages/UserManagementPage";
import AddPage from "./Pages/AddPage";
import DetailsPage from "./Pages/DetailsPage";
import UpdatePage from "./Pages/UpdatePage";
import socketIOClient from "socket.io-client";
import {SocketService} from "./Services/SocketService";
import HomePage from "./Pages/HomePage";
import AboutMePage from "./Pages/AboutMePage";
import CVPage from "./Pages/CVPage";
import BlogPage from "./Pages/BlogPage";
import BlogPostPage from "./Pages/BlogPostPage";

const API_URL = "http://localhost:8000"

function App() {

    const sockerService = new SocketService();

    useEffect(() => {
        const socket = socketIOClient(API_URL);

        socket.on('connect', () => {
            sockerService.onConnect()
        });

        socket.on('disconnect', () => {
            sockerService.onDisconnect()
        });

        socket.on('userCreated', (eventData) => {
            sockerService.onUserCreated(eventData)
        })

        socket.on('userPromoted', (eventData) => {
            sockerService.onUserPromoted(eventData)
        })

        socket.on('userDeleted', (eventData) => {
            sockerService.onUserDeleted(eventData)
        })

        socket.on('postCreated', (eventData) => {
            sockerService.onPostCreated(eventData)
        })

        socket.on('postUpdated', (eventData) => {
            sockerService.onPostUpdated(eventData)
        })

        socket.on('postDeleted', (eventData) => {
            sockerService.onPostDeleted(eventData)
        })

    }, []);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/error" element={<div>ERROR</div>}></Route>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/aboutme" element={<AboutMePage/>}></Route>
                    <Route path="/cv" element={<CVPage/>}></Route>
                    <Route path="/blog" element={<BlogPage/>}></Route>
                    <Route path="/blog/:id" element={<BlogPostPage/>}></Route>
                    <Route element={<BackendRoutes/>}>
                        <Route path="/login" element={<LoginPage/>}></Route>
                        <Route element={<UserRoutes/>}>
                            <Route path="/admin" element={<AdminPage/>}/>
                            <Route path="/admin/posts" element={<UserPostsPage/>}/>
                            <Route path="/admin/posts/:id" element={<DetailsPage/>}/>
                            <Route path="/admin/posts/update/:id" element={<UpdatePage/>}/>
                            <Route path="/admin/posts/add" element={<AddPage/>}/>
                            <Route path="/logout" element={<LogoutPage/>}/>
                            <Route element={<AdminRoutes/>}>
                                <Route path="/admin/users/create" element={<RegisterPage/>}></Route>
                                <Route path="/admin/users" element={<UserManagementPage/>}/>
                            </Route>
                        </Route>
                    </Route>
                    <Route path="*" element={<div>404 NOT FOUND</div>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
