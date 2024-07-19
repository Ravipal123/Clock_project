import {auth, googleProvider} from '../FirebaseConfig';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async(e) => {
        e.preventDefault();
        try{
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result);            
            window.location.href="/clock";
        }
        catch(error){
            console.error("Error loging in:", error);
           
        }
    };

    const handleGoogleLogin = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            console.log(result);
            window.location.href="/clock";   
        } catch (error) {
            console.error("Error loging in  with Google:", error);
        }
    };

    return (
        <>
            
            <div className="login-container">
                <h2>Login</h2>
                <p>Doesn't have an account yet? <Link to="/signup">Sign Up</Link></p>
                <form onSubmit={handlelogin}>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            value={email} 
                            placeholder="you@example.com" 
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            value={password} 
                            placeholder="Enter 6 characters or more"
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
                    </div>
                    <button type="submit" 
                        className="login-button"
                    >LOGIN</button>
                </form>
                <p className='or-login'>Or Login with</p>
                <div className="social-login">
                    <button 
                        className="google-button"
                        onClick={handleGoogleLogin}
                    >Google</button>
                </div>
            </div>
            
        </>
        )
}

export default Login
