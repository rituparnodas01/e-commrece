// SellerRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const SellerRegistrationForm = () => {
  const [sellerName, setSellerName] = useState('');
  const [sellerEmail, setSellerEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/sellers/register', {
        sellerName,
        sellerEmail,
        password,
        confirmPassword
      });
      console.log(response.data); // Handle success response
    } catch (error) {
      console.error('Error:', error); // Handle error
    }
  };

  return (
    <Wrapper>
     <Title>Seller's Can Register Here</Title>
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
