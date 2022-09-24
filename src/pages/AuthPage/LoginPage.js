import './AuthPage.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { login, testLogin } from "../../redux/reducers/authSlice";
const LoginPage = () => {
    const dispatch = useDispatch();
    const [loginData, setloginData] = useState({
        username: "",
        password: "",
    });

    const inputHandler = (e) => {
        if (e.target.type === "checkbox") {
            setloginData((loginData) => ({
                ...loginData,
                [e.target.name]: e.target.checked,
            }));
        }
        else {
            setloginData((data) => ({ ...data, [e.target.name]: e.target.value }));
        }

    };

    return (
        <div>
            <section className="login-container">
                <form className="login-form" onSubmit={(e) => { e.preventDefault(); dispatch(login(loginData)) }}>
                    <h3 className="login-header" >Login</h3>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="admin" id="email" onChange={inputHandler} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="admin123" id="password" onChange={inputHandler} required />
                    </div>
                    <button className="login-button" type="submit">Login</button>
                    <div className="test-button" onClick={() => dispatch(testLogin())}>Test user</div>
                    <Link to="/signup" className="login-new_account" >Create New Account</Link>

                </form>
            </section>
        </div>
    )
}

export default LoginPage