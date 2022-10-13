import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className="login">

            <Link to="/">
                <img className="Login_logo"
                    src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F52%2F8a%2Fe7%2F528ae75ee9ae1fc68649e4f35aa42df8.jpg&type=sc960_832"
                    alt="" />
            </Link>
            
        </div>
    );
}

export default Login;