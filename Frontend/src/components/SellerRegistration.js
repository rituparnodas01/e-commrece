import React, { useState } from 'react';
import styled from 'styled-components';

const SellerRegistrationForm = () => {
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch('http://localhost:2000/Flipzon/signupseller', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          Seller_name: sellerName,
          Seller_email: sellerEmail,
          password,
          confirmPassword
        })
      });
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      window.location.href = '/sellerlogin'; // Redirect on successful registration
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Wrapper>
      <Title>Seller's Can Register Here</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <form className="form-container" onSubmit={handleSubmit}>
        <input className="input-field" type="text" placeholder="Seller Name" value={sellerName} onChange={(e) => setSellerName(e.target.value)} />
        <input className="input-field" type="email" placeholder="Seller Email" value={sellerEmail} onChange={(e) => setSellerEmail(e.target.value)} />
        <input className="input-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className="input-field" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <button className="register-button" type="submit">Register</button>
      </form>
    </Wrapper>
  );
};



const ErrorMessage = styled.p`
  color: red;
  
`;
const Title = styled.h1`
  text-align: center;
  font-size:20px;
`;

const Wrapper = styled.section`

.form-container {
    margin-top:50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 300px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.register-button {
  width: 300px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #ff9900;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}


.register-button:hover {
  background-color: #ff8000;
}

`
export default SellerRegistrationForm;
