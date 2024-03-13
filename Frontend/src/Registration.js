import React, { useState } from 'react';
import styled from 'styled-components';

const Registration = () => {
    const [formData, setFormData] = useState({
        
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your registration logic here, e.g., validation and API call
        console.log(formData);
        // Reset the form after submission
        setFormData({
           
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        });
    };

    return (
        <Wrapper>
            <div className="registration-container">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label className="form-label">Username:</label>
                        <input className="form-input" type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirm Password:</label>
                        <input className="form-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .registration-container {
        width: 500px; /* Increased width */
        padding: 40px; /* Increased padding */
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
/* Label style */
.form-label {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom:10px;
}

    .registration-container h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
    }

    .form-group {
        margin-bottom: 20px; /* Increased margin */
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 12px; /* Increased padding */
        font-size: 18px; /* Increased font size */
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .register-button {
        width: 100%;
        padding: 12px;
        font-size: 18px;
        background-color: #ff6600;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .register-button:hover {
        background-color: #ff4d00;
    }
`;

export default Registration;