import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import FormatPrice from '../helpers/FormatPrice';
import { useCartContext } from '../context/cart_context';

const CheckoutPage = () => {
  const { total_price, shipping_fee } = useCartContext();
  const [shippingAddress, setShippingAddress] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const handleAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentType(e.target.value);
  };

  const handleCheckout = () => {
    // Implement your checkout logic here, such as submitting the order
    // with shipping address, payment type, and items in the cart
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="checkout-form">
          <h2>Shipping Address</h2>
          <input
            type="text"
            placeholder="Enter your shipping address"
            value={shippingAddress}
            onChange={handleAddressChange}
          />
          <h2>Payment Type</h2>
          <select value={paymentType} placeholder="select payment method" onChange={handlePaymentTypeChange}>
          
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            
            <option value="paypal">UPI/NetBanking</option>
            <option value="cod">Cash on Delivery </option>
          </select>
          <Button onClick={handleCheckout}>Place Order</Button>
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div>
            <p>Subtotal: <FormatPrice price={total_price} /></p>
            <p>Shipping Fee: <FormatPrice price={shipping_fee} /></p>
            <hr />
            <p>Total: <FormatPrice price={total_price + shipping_fee} /></p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
/* CheckoutPage.css */

.container {
  display: flex;
  justify-content: space-between;
  margin: 20px auto;
  max-width: 1200px;
}

.checkout-form {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
}

.checkout-form h2 {
  margin-bottom: 10px;
  font-size: 1.2rem;
}

.checkout-form input,
.checkout-form select {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
}

.checkout-form select {
  appearance: none;
  background: url('data:image/svg+xml;utf8,<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>') no-repeat right 10px center/12px 12px;
}

.order-summary {
  flex: 1;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 5px;
}

.order-summary h2 {
  margin-bottom: 15px;
  font-size: 1.2rem;
}

.order-summary div {
  border-top: 1px solid #ccc;
  padding-top: 15px;
  margin-top: 15px;
}

.order-summary p {
  margin-bottom: 10px;
  font-size: 1rem;
}

.order-summary hr {
  margin: 15px 0;
}

Button {
  background-color: #f0c14b;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  border-radius: 3px;
  transition: background-color 0.2s;
}

Button:hover {
  background-color: #ddb347;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
  
  .checkout-form,
  .order-summary {
    width: 100%;
    margin-bottom: 20px;
  }
}

`;

export default CheckoutPage;
