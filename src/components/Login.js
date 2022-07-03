import React from 'react';
import auth from './firebase.init'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import background from '../image/background.jpg'

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let location = useLocation();
    let navigate = useNavigate();

    let from = '/' || location.state?.from?.pathname;
    const handleGoogleSignin = () => {
        signInWithGoogle();

    }
    if (user) {
        navigate('/')

    }
    const btn = <button onClick={handleGoogleSignin} className='btn btn-primary btn-outline '>Login with google</button>

    return (
        <div>
            <div style={{ background: `url(${background})` }} class="hero min-h-screen">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Daily Tasks App</h1>
                        <p class="mb-5">Write your daily tasks here and make your day more productive</p>
                        <button onClick={handleGoogleSignin} class="btn btn-primary">continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;