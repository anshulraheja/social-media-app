import './AuthPage.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signUp, testLogin } from "../../redux/reducers/authSlice";
import { toast } from "react-toastify";
const SignupPage = () => {
    const dispatch = useDispatch();
    const [signUpData, setSignUpData] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
    });

    const inputHandler = (e) => {
        if (e.target.type === "checkbox") {
            setSignUpData((signUpData) => ({
                ...signUpData,
                [e.target.name]: e.target.checked,
            }));
        }
        else {
            setSignUpData((data) => ({ ...data, [e.target.name]: e.target.value }));
        }

    };

    const signupHandler = (e) => {
        e.preventDefault();
        if (signUpData.password !== signUpData.confirmpassword) {
            toast.error("Password does not match");
            return;
        }
        else {
            dispatch(signUp(signUpData));
        }
    }

    return (

        <div>
            <div><section className="login-container">
                <form className="login-form" onSubmit={signupHandler}>
                    <h3 className="login-header">Signup</h3>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="name" placeholder="Name" name="name" onChange={inputHandler} required />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" name="email" onChange={inputHandler} required />
                    </div>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" placeholder="Username" name="username" onChange={inputHandler} required />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password" name="password" onChange={inputHandler} required />
                    </div>
                    <div>
                        <label htmlFor="confirmpassword">Confirm Passowrd</label>
                        <input type="password" placeholder="Confirm Passowrd" name="confirmpassword" onChange={inputHandler} required />
                    </div>
                    <button type="submit" className="login-button">Create New Account</button>
                    <div className="test-button" onClick={() => dispatch(testLogin())}>Test user</div>
                    <Link to="/login" className="login-new_account">Already Have an account? <span>Login</span></Link>
                </form>
            </section>
            </div>

        </div>
    )
}

export default SignupPage