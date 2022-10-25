import React, {useState} from 'react';
import './Login.css'
import {Link, useHistory} from 'react-router-dom';
import {auth} from './firebase';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault(); // 만약 이게 없으면 버튼을 눌렀을 때 새로고침이 된다.
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
            })
            .catch(error => alert(error.message()))
    }

    return (
        <div className="login">

            <Link to="/">
                <img className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2880px-Amazon_logo.svg.png"
                    alt="" />
            </Link>


            <div className="login_container">

                <h1>로그인</h1>

                <form>
                    <h5> 이메일 </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                    <h5> 비밀번호 </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={signIn} className="login_signInButton"> 로그인 하기 </button>
                
                </form>

                <p> 이용 약관 동의하십니까? </p>

                <button onClick={register} className='login_registerButton'> 회원가입 </button>
            </div>
            
        </div>
    );
}

export default Login;