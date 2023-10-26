import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/LoginSignup.css';
import emaillogo from '../../assets/email.png';
import passwordlogo from '../../assets/password.png';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (email.trim() === '' || password.trim() === '') {
            setError('All fields are required');
            return;
        } else if (!isValidEmail(email)) {
            setError('Invalid email');
            return;
        }

        // Check if the user exists in local storage and if the password matches
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        const user = existingUsers.find((u) => u.email === email);

        if (!user || user.password !== password) {
            setError('Invalid email or password');
            return;
        }

        localStorage.setItem('user', JSON.stringify(user));

        navigate('/todo');
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Login</div>
                <div className='underline'></div>
            </div>
            
            <div className='inputs'>
                <div className='input'>
                    <img src={emaillogo} alt='' />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='input'>
                    <img src={passwordlogo} alt='' />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            <div style={{color:'red',marginTop:"10px"}}>
            {error && <div className="error-message">{error}</div>}
            </div>
            <div className='forgot-pass'>
                Don't have an account? <span onClick={() => navigate('/')}>Sign Up</span>
            </div>
            <div className='submit-container'>
                <div className='submit' onClick={handleLogin}>Login</div>
            </div>
        </div>
    );
}

export default Login;
