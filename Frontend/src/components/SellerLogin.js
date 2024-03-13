// SellerLoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const SellerLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sellers/login', {
        email,
        password
      });
      console.log(response.data); // Handle success response, e.g., redirect to dashboard
    } catch (error) {
      setError(error.response.data.message); // Handle error
    }
  };

  return (
<Wrapper>
    <div className="login-container">
      <h2>Seller Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className='input-label'>Email:</label>
          <input className="input-field" placeholder="Seller Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className='input-label'>Password:</label>
          <input className="input-field" placeholder="Seller Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
</Wrapper>
  );
};
const Wrapper = styled.div`
margin-top:70px;
.login-container {
    
    height:300px;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.login-container h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.input-label {
  display: block;
  margin-bottom: 5px;
  font-size:10px;
}

.input-field {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.input-field::placeholder {
  font-size: 15px; /* Set placeholder font size */
   /* Initially make the placeholder transparent */
  position: absolute;
  top: 50%;
  left: 10px;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #ff9900;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #ff8000;
}

.error-message {
  color: red;
  margin-top: 10px;
}

`

export default SellerLoginForm;
