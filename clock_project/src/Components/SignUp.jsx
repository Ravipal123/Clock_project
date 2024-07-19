import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {auth, db, googleProvider} from '../FirebaseConfig';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignup = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            
            if(user){
                await setDoc(doc(db, "User", user.uid), {
                    email: user.email,
                })
            }
            
            toast.success("SignUp Successfully", {
                position:"top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setEmail('');
            setPassword('');
           
            
        }catch(error){
            console.error("logging error:", error);
            
        }
    };

    const handleGoogleLogin = async() => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const user = result.user;
            console.log(result);
            
            if(result.user){
                await setDoc(doc(db, "User", user.uid), {
                    email: user.email,
                });
            }
            window.location.href="/clock"
        } catch (error) {
            console.error("Error loging in  with Google:", error);
        }
    };

    return (
        <>
           
            <div className="login-container">
                <h2>SignUp</h2>
                <p>Doesn't have an account yet? <Link to="/">Login </Link></p>
                <form onSubmit={handleSignup}>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" 
                            value={email} 
                            placeholder="you@example.com"
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Create password</label>
                        <input type="password" 
                            value={password} 
                            placeholder="Enter 6 characters or more" 
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">Sign-up</button>
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

export default SignUp
