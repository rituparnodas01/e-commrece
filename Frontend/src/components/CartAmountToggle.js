// import React from "react";
// import { FaMinus, FaPlus } from "react-icons/fa";

// const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
//   return (
//     <div className="cart-button">
//       <div className="amount-toggle">
//         <button onClick={() => setDecrease()}>
//           <FaMinus />
//         </button>
//         <div className="amount-style">{amount}</div>
//         <button onClick={() => setIncrease()}>
//           <FaPlus />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CartAmountToggle;
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
// import "./CartAmountToggle.css"; // Import CSS file

const CartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <div className="cart-button">
      <div className="amount-toggle">
        <div className="quantity-text">Quantity:</div> {/* Text before buttons */}
        <button className="toggle-button" onClick={() => setDecrease()}>
          <FaMinus />
        </button>
        <div className="amount-style">{amount}</div>
        <button className="toggle-button" onClick={() => setIncrease()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default CartAmountToggle;
