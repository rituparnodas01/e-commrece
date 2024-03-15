// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom'; // Import Link for routing

// const Login = () => {
//     const [loginData, setLoginData] = useState({
//         email: '',
//         password: ''
//     });

//     const handleChange = (e) => {
//         setLoginData({
//             ...loginData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your login logic here, e.g., validation and API call
//         console.log(loginData);
//         // Reset the form after submission
//         setLoginData({
//             email: '',
//             password: ''
//         });
//     };

//     return (
//         <Wrapper>
        
//             <div className="login-container">
//             <LogoWrapper>
//                     <Logo src="./images/your-store-high-resolution-logo.png" alt="Logo" className="logo" />
//                 </LogoWrapper>
//                 <h2 className="login-title">Login</h2>
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <div className="form-group">
//                         <label className="form-label">Email:</label>
//                         <input type="email" name="email" value={loginData.email} onChange={handleChange} className="form-input"  placeholder="Enter your email"  required />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label">Password:</label>
//                         <input type="password" name="password" value={loginData.password} onChange={handleChange} className="form-input" placeholder="Enter your password" required />
//                     </div>
//                     <Link to="/home" className='link'>
//   <button type="submit" className="login-button">Login</button>
//                    </Link>
//                 </form>
//                 <p className="register-link">Don't have an account? <Link to="/register">Register here</Link></p>
//                 <Link to="/sellerlogin" >
//                  <button className="seller-register-button">Seller Login </button>
//                 </Link>
//             </div>
//         </Wrapper>
//     );
// };

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for routing

const Login = () => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:2000/Flipzon/loginuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    User_email: loginData.email,
                    password: loginData.password
                }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Reset the form after successful login
            setLoginData({
                email: '',
                password: ''
            });

            // Redirect to home page or do something else after successful login
            window.location.href = '/home';
        } catch (error) {
            console.error('Error:', error);
            setError('Login failed. Please check your email and password.');
        }
    };

    return (
        <Wrapper>
            <div className="login-container">
                <LogoWrapper>
                    <Logo src="./images/your-store-high-resolution-logo.png" alt="Logo" className="logo" />
                </LogoWrapper>
                <h2 className="login-title">Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className="login-form">
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input type="email" name="email" value={loginData.email} onChange={handleChange} className="form-input" placeholder="Enter your email" required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input type="password" name="password" value={loginData.password} onChange={handleChange} className="form-input" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
                <p className="register-link">Don't have an account? <Link to="/register">Register here</Link></p>
                <Link to="/sellerlogin">
                    <button className="seller-register-button">Seller Login </button>
                </Link>
            </div>
        </Wrapper>
    );
};



const LogoWrapper = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`;

const Logo = styled.img`
    width: 200px; /* Increase the width as needed */
    height: auto;
`;

const Wrapper = styled.section`
/* Import any necessary fonts here */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

/* Define your wrapper styles */

    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    background-color: #f0f2f5; /* Amazon uses a light gray background */
    font-family: 'Roboto', sans-serif; /* Amazon uses Roboto font */
    .seller-register-button{
        position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    }

/* Style for the login container */
.login-container {
    background-color: #ffffff; /* White background */
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); /* Shadow effect */
    max-width: 500px;
    width: 100%;
    min-height: 500px;
}
.link{
    margin-bottom:10px;
}

/* Title style */
.login-title {
    margin-bottom:2px;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
}

/* Form style */
.login-form {
    display: flex;
    flex-direction: column;
}

/* Form group style */
.form-group {
    margin-bottom: 20px;
}

/* Label style */
.form-label {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom:10px;
}

/* Input style */
.form-input {
    margin-top:10px;
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc; /* Light gray border */
    border-radius: 5px;
}
.form-input::placeholder {
    text-transform: lowercase;
}

/* Login button style */
.login-button {
    width: 50%;
    background-color: #ff9900; /* Amazon orange */
    color: #ffffff;
    border: none;
    border-radius: 5px;
    padding: 12px 0;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login-button:hover {
    background-color: #e68a00; /* Darker shade of orange on hover */
}

/* Register link style */
.register-link {
    font-size: 20px;
    text-align: center;
}

.register-link a {
    color: #0066c0; /* Amazon blue */
    text-decoration: none;
    font-weight: 500;
}

.register-link a:hover {
    text-decoration: underline;
}

`

export default Login;

