import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/LoginSignup.css';
import user from '../../assets/user.png';
import emaillogo from '../../assets/email.png';
import passwordlogo from '../../assets/password.png';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            setError('All fields are required');
            return;
        } else if (!isValidEmail(email)) {
            setError('Invalid email');
            return;
        }

        const userData = {
            name,
            email,
            password,
        };

        // Check if a user with the same email already exists in local storage
        const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
        if (existingUsers.some((user) => user.email === email)) {
            setError('User with this email already exists');
            return;
        }

        // Add the new user to the list of users
        existingUsers.push(userData);
        localStorage.setItem('users', JSON.stringify(existingUsers));
        localStorage.setItem('user', JSON.stringify(userData));

        navigate('/todo');
    };

    const isValidEmail = (email) => {
        const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        return emailPattern.test(email);
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Sign Up</div>
                <div className='underline'></div>
            </div>
            
            <div className='inputs'>
                <div className='input'>
                    <img src={user} alt='' />
                    <input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <img src={emaillogo} alt='' />
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='input'>
                    <img src={passwordlogo} alt='' />
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
            </div>
            <div style={{color:'red',marginTop:"10px"}}>
            {error && <div className="error-message">{error}</div>}
            </div>
            <div className='forgot-pass'>
                Already have an account? <span onClick={() => navigate('/login')}>Login</span>
            </div>
            <div className='submit-container'>
                <div className='submit' onClick={handleSignup}>
                    Sign Up
                </div>
            </div>
        </div>
    );
}

export default Signup;
