// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import useHist

// const Registration = () => {
//     const [formData, setFormData] = useState({
//         User_name: '',
//         User_email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const history = useHistory();

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:2000/Flipzon/signupuser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             if (!response.ok) {
//                 throw new Error('Failed to register');
//             }
//             // Assuming your backend sends back a response containing cookies, you can extract them here
//             const cookies = response.headers.get('Set-Cookie');

//             // Do something with the cookies if needed, e.g., store them in localStorage or as HTTP cookies

//             // Reset the form after successful registration
//             setFormData({
//                 User_name: '',
//                 User_email: '',
//                 password: '',
//                 confirmPassword: ''
//             });

//             // Redirect to login page after successful registration
//             history.push('/login');
//         } catch (error) {
//             console.error('Error:', error);
//             // Handle error here, e.g., show error message to the user
//         }
//     };

//     return (
//         <Wrapper>
//             <div className="registration-container">
//                 <h2>Registration</h2>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <label className="form-label">Username:</label>
//                         <input className="form-input" type="text" name="User_name" value={formData.User_name} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label">Email:</label>
//                         <input className="form-input" type="email" name="User_email" value={formData.User_email} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label">Password:</label>
//                         <input className="form-input" type="password" name="password" value={formData.password} onChange={handleChange} required />
//                     </div>
//                     <div className="form-group">
//                         <label className="form-label">Confirm Password:</label>
//                         <input className="form-input" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
//                     </div>
//                     <button type="submit" className="register-button">Register</button>
//                 </form>
//                 <Link to="/sellerregister">
//                     <button className="seller-register-button">Seller Registration </button>
//                 </Link>
//             </div>
//         </Wrapper>
//     );
// };

// const Wrapper = styled.section`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100vh;

//     .registration-container {
//         width: 500px; /* Increased width */
//         padding: 40px; /* Increased padding */
//         border: 1px solid #ccc;
//         border-radius: 5px;
//         background-color: #fff;
//         box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//     }
// /* Label style */
// .form-label {
//     font-size: 20px;
//     font-weight: 500;
//     text-align: center;
//     margin-bottom:10px;
// }

//     .registration-container h2 {
//         text-align: center;
//         margin-bottom: 20px;
//         font-size: 24px;
//     }

//     .form-group {
//         margin-bottom: 20px; /* Increased margin */
//     }

//     .form-group label {
//         display: block;
//         margin-bottom: 5px;
//     }

//     .form-group input {
//         width: 100%;
//         padding: 12px; /* Increased padding */
//         font-size: 18px; /* Increased font size */
//         border: 1px solid #ccc;
//         border-radius: 5px;
//     }

//     .register-button {
//         width: 100%;
//         padding: 12px;
//         font-size: 18px;
//         background-color: #ff6600;
//         color: #fff;
//         border: none;
//         border-radius: 5px;
//         cursor: pointer;
//     }

//     .register-button:hover {
//         background-color: #ff4d00;
//     }
//     .seller-register-button{
//         position: absolute;
//     top: 20px;
//     right: 20px;
//     padding: 10px;
//     font-size: 16px;
//     background-color: #007bff;
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     }
// `;

// export default Registration;
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [formData, setFormData] = useState({
        User_name: '',
        User_email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:2000/Flipzon/signupuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Failed to register');
            }
            // Assuming your backend sends back a response containing cookies, you can extract them here
            const cookies = response.headers.get('Set-Cookie');

            // Do something with the cookies if needed, e.g., store them in localStorage or as HTTP cookies

            // Reset the form after successful registration
            setFormData({
                User_name: '',
                User_email: '',
                password: '',
                confirmPassword: ''
            });

            // Redirect to login page after successful registration using window.location
            window.location.href = '/login';
        } catch (error) {
            console.error('Error:', error);
            // Handle error here, e.g., show error message to the user
        }
    };

    return (
        <Wrapper>
            <div className="registration-container">
                <h2>Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Name:</label>
                        <input className="form-input" placeholder="Enter your name" type="text" name="User_name" value={formData.User_name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email:</label>
                        <input className="form-input" placeholder="abc@gmail.com" type="email" name="User_email" value={formData.User_email} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password:</label>
                        <input className="form-input" placeholder="Enter your password" type="password" name="password" value={formData.password} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Confirm Password:</label>
                        <input className="form-input" placeholder="confirm your password" type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="register-button">Register</button>
                </form>
                <Link to="/sellerregister">
                    <button className="seller-register-button">Seller Registration </button>
                </Link>
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
        width: 500px;
        padding: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
h2{
    font-weight:bold;
    color:green;
}
    .form-label {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        margin-bottom: 10px;
    }

    .registration-container h2 {
        text-align: center;
        margin-bottom: 20px;
        font-size: 24px;
    }

    .form-group {
        margin-bottom: 20px;
    }

    .form-group label {
        display: block;
        margin-bottom: 5px;
    }

    .form-group input {
        width: 100%;
        padding: 12px;
        font-size: 18px;
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

    .seller-register-button {
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
`;

export default Registration;
