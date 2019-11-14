import React from 'react'
import './index.scss'

const Login = () => {
    return (
        <div id='login'>
            <div id='leftBackground'>
                <div id='task'>
                    <div>
                        <h1>Welcome Back</h1>
                        <p>Start the Adventure</p>
                        <input type="text" placeholder="username"/><br/>
                        <input type="password" placeholder="password"/>
                        <div id="remember">
                            <div>
                                <input type="checkbox"/>
                                <p>Remember me</p>
                            </div>
                            <p>ForgotPassword?</p>
                        </div>
                        <button id="log">Login</button>
                        <p>- - - - - - - - - - - - - - - - - - Or - - - - - - - - - - - - - - - - - -</p>
                        <button id='google'>Login with Google</button>
                        <button id="facebook">Login with Facebook</button>
                        <p>Don`t have an account?<button>Click here</button></p>
                    </div>
                </div>
            </div>
            <div id='rightBackground'>
                <div>
                </div>
            </div>
        </div>
    )
}
export default Login